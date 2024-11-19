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
import {EnergyEstimationListComponent} from './energy-estimation-list/energy-estimation-list.component';
import {EnergyEstimationNamedComponent} from "./energy-estimation-named/energy-estimation-named.component";
import {EnergyFormComponent} from "./energy-estimation-named/energy-estimation/energy-form/energy-form.component";
import {EnergyEstimationComponent} from "./energy-estimation-named/energy-estimation/energy-estimation.component";
import {
    EnergyFormResultComponent
} from "./energy-estimation-named/energy-estimation/energy-form/energy-form-result/energy-form-result.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: EnergyEstimationNamedComponent},
            {path: 'estimations', component: EnergyEstimationListComponent},
        ]),
        FormsModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTableModule,
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        EnergyFormComponent,
        EnergyEstimationComponent,
        EnergyFormResultComponent,
        EnergyEstimationNamedComponent,
        EnergyEstimationListComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
