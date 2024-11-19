import {Component, Input} from '@angular/core';
import {EnergyType} from "./energy-form/EnergyType";
import {EnergyFormTyped} from "./energy-form/EnergyFormTyped";

@Component({
    selector: 'app-energy-estimation',
    templateUrl: './energy-estimation.component.html',
    styleUrls: ['./energy-estimation.component.css']
})
export class EnergyEstimationComponent {

    @Input()
    energyFormTypedEnergy: EnergyFormTyped = {type: EnergyType.Energy};
    @Input()
    energyFormTypedGas: EnergyFormTyped = {type: EnergyType.Gas};

}
