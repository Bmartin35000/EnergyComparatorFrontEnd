import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    form: FormGroup = new FormGroup({
        id: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    constructor(private router: Router, private userService: UserService, private snackBar: MatSnackBar) {
    }

    onSubmit() {
        if (this.form.valid) {
            this.userService.signUp(this.form.value.id, this.form.value.password);
            this.router.navigate(["/home"]);
            this.userService.signIn(this.form.value.id, this.form.value.password).subscribe(({
                error: (e) =>
                    this.snackBar.open('Erreur lors de la connexion : ' + e.message, "OK", {
                        duration: 10000,
                        panelClass: ['red-snackbar']
                    }),
                complete: () => {
                    this.snackBar.open('Connecté', "OK", {
                        duration: 3000,
                        panelClass: ['green-snackbar']
                    });
                    const user = {
                        id: this.form.value.id,
                        password: this.form.value.password
                    }
                    this.userService.registerInCacheUser(user);
                    this.router.navigate(["/home"]);
                }
            }));
        }
    }

    onSignUp() {
        this.router.navigate(["/signUp"]);
    }
}
