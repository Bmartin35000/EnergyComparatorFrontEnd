import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EnergyEstimationComponent} from "./energy-estimation/energy-estimation.component";
import {EnergyService} from "../energy.service";
import {EnergyEstimation} from "./energy-estimation/EnergyEstimation";

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

    constructor(private energyService: EnergyService) {
    }

    ngOnInit(): void {
        this.energyEstimations.push(this.currentEnergyEstimationComponent);
    }

    onSubmit() {
        const energyEstimation: EnergyEstimation = {
            energy: this.currentEnergyEstimationComponent.energyFormTypedEnergy,
            gas: this.currentEnergyEstimationComponent.energyFormTypedGas,
            energySupplier: this.form.value.energySupplier,
            offerName: this.form.value.offerName,
        }
        this.energyService.addEnergyEstimations(energyEstimation);
    }

    onCancel() {
        this.form.reset();
    }
}
