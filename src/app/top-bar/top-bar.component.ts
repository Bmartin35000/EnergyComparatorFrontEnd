import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

    constructor(private router: Router, private userService: UserService) {
    }

    signOff() {
        this.userService.signOff();
        this.router.navigate(["signUp"])
    }

    isSignedIn() {
        return this.userService.isSignedIn;
    }
}