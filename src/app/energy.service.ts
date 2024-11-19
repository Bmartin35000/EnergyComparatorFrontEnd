import {Injectable} from '@angular/core';
import {EnergyEstimation} from "./energy-estimation-named/energy-estimation/EnergyEstimation";

@Injectable({
    providedIn: 'root',
})
export class EnergyService {
    energyEstimations: EnergyEstimation[] = [];

    constructor() {
    }

    addEnergyEstimations(energyEstimation: EnergyEstimation) {
        this.energyEstimations.push(energyEstimation);
        console.log(this.energyEstimations);
    }

    getEnergyEstimations() {
        return this.energyEstimations;
    }

    clearEnergyEstimations() {
        this.energyEstimations = [];
        return this.energyEstimations;
    }
}
