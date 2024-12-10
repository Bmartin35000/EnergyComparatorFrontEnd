import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {EnergyEstimationListComponent} from './energy/energy-estimation-list/energy-estimation-list.component';
import {EnergyEstimationNamedComponent} from "./energy/energy-estimation-named/energy-estimation-named.component";
import {
    EnergyFormComponent
} from "./energy/energy-estimation-named/energy-estimation/energy-form/energy-form.component";
import {
    EnergyEstimationComponent
} from "./energy/energy-estimation-named/energy-estimation/energy-estimation.component";
import {
    EnergyFormResultComponent
} from "./energy/energy-estimation-named/energy-estimation/energy-form/energy-form-result/energy-form-result.component";
import {MatTableModule} from "@angular/material/table";
import {RoundedUp} from "./energy/energy-estimation-list/roundedUp";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {EnergyEstimationDialogComponent} from './energy/energy-estimation-dialog/energy-estimation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {Guard} from "./guard";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', redirectTo: 'signUp', pathMatch: 'full'},
            {path: 'signUp', component: SignUpComponent},
            {path: 'signIn', component: SignInComponent},
            {path: 'home', component: EnergyEstimationNamedComponent, canActivate: [Guard]},
            {path: 'estimations', component: EnergyEstimationListComponent, canActivate: [Guard]},
        ]),
        FormsModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
        MatSnackBarModule,
        MatDialogModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        EnergyFormComponent,
        EnergyEstimationComponent,
        EnergyFormResultComponent,
        EnergyEstimationNamedComponent,
        EnergyEstimationListComponent,
        RoundedUp,
        EnergyEstimationDialogComponent,
        SignUpComponent,
        SignInComponent
    ],
    bootstrap: [AppComponent],
    providers: [Guard],
})
export class AppModule {
}
