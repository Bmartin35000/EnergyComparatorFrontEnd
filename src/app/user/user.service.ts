import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    urlBackEndServer = "http://localhost:8080/";
    isSignedIn: boolean = false;
    private id: string;
    private password: string;

    constructor(private httpClient: HttpClient) {
    }

    signIn(id: string, password: string) {
        const userDto = {
            id: id,
            password: password
        }
        return this.httpClient.post(this.urlBackEndServer + "signIn", userDto);
    }

    signUp(id: string, password: string) {
        const userDto = {
            id: id,
            password: password
        }
        return this.httpClient.post(this.urlBackEndServer + "signUp", userDto);
    }

    registerInCacheUser(user: User) {
        this.id = user.id;
        this.password = user.password;
        this.isSignedIn = true;
    }

    signOff() {
        this.id = "";
        this.password = "";
        this.isSignedIn = false;
    }
}
