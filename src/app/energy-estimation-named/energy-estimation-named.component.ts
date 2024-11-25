import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EnergyEstimationComponent} from "./energy-estimation/energy-estimation.component";
import {EnergyService} from "../energy.service";
import {EnergyEstimation} from "./energy-estimation/EnergyEstimation";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-energy-estimation-list',
    templateUrl: './energy-estimation-named.component.html',
    styleUrls: ['./energy-estimation-named.component.css']
})
export class EnergyEstimationNamedComponent implements OnInit {

    form: FormGroup = new FormGroup({
        energySupplier: new FormControl(''),
        offerName: new FormControl(''),
    });
    energyEstimations: EnergyEstimationComponent[] = [];
    currentEnergyEstimationComponent: EnergyEstimationComponent = new EnergyEstimationComponent();

    constructor(private energyService: EnergyService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.energyEstimations.push(this.currentEnergyEstimationComponent);
    }

    onSubmit() {
        const energyEstimation: EnergyEstimation = new EnergyEstimation(this.currentEnergyEstimationComponent.energyFormTypedElectricity,
            this.currentEnergyEstimationComponent.energyFormTypedGas,
            this.form.value.energySupplier,
            this.form.value.offerName
        )

        /*
        const energyEstimation: EnergyEstimation = {
            energy: this.currentEnergyEstimationComponent.energyFormTypedEnergy,
            gas: this.currentEnergyEstimationComponent.energyFormTypedGas,
            energySupplier: this.form.value.energySupplier,
            offerName: this.form.value.offerName,
            annualPrice: EnergyEstimation.prototype.annualPrice,
        }

         */
        this.energyService.addEnergyEstimations(energyEstimation);
        this.snackBar.open('Estimations enregistrées', "OK", {
            duration: 3000,
            panelClass: ['green-snackbar', 'login-snackbar', 'center-top']
        });
    }

    onCancel() {
        this.form.reset();
    }
}
