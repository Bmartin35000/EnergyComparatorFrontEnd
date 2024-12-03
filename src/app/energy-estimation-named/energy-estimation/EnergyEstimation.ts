import {EnergyFormTyped} from "./energy-form/EnergyFormTyped";


export class EnergyEstimation {
    electricity: EnergyFormTyped;
    gas: EnergyFormTyped;
    energySupplier: string;
    offerName: string;
    id?: string;

    constructor(electricity: EnergyFormTyped, gas: EnergyFormTyped, energySupplier: string, offerName: string) {
        this.electricity = electricity;
        this.gas = gas;
        this.energySupplier = energySupplier;
        this.offerName = offerName;
    }
}