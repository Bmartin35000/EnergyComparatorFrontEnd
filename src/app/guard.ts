import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from "./user/user.service";

@Injectable()
export class Guard implements CanActivate {

    constructor(private userService: UserService) {
    }

    canActivate(): boolean {
        return this.userService.isSignedIn;
    }
}