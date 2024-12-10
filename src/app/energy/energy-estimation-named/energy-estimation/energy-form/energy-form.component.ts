import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EnergyFormTyped} from "./EnergyFormTyped";
import {EnergyResult} from "./EnergyResult";

@Component({
    selector: 'app-energy-form',
    templateUrl: './energy-form.component.html',
    styleUrls: ['./energy-form.component.css']
})
export class EnergyFormComponent {
    @Output()
    forwardResult: EventEmitter<EnergyFormTyped> = new EventEmitter();

    form: FormGroup = new FormGroup({
        annualConsumption: new FormControl(''),
        monthlySubscription: new FormControl(''),
        kiloWattPrice: new FormControl(''),
    });

    @Input()
    energyFormTyped: EnergyFormTyped;

    constructor() {
    }

    onSubmit() {
        const energyResult: EnergyResult = {
            subscription: {
                monthlyPrice: this.form.value.monthlySubscription,
                annualPrice: this.form.value.monthlySubscription * 12
            },
            kilowatt: {
                monthlyPrice: this.form.value.annualConsumption * this.form.value.kiloWattPrice / 12,
                annualPrice: this.form.value.annualConsumption * this.form.value.kiloWattPrice
            },
        }

        this.energyFormTyped.total = energyResult;
    }
}