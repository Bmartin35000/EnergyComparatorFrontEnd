import {Component, Input} from '@angular/core';
import {EnergyFormTyped} from "../EnergyFormTyped";

@Component({
    selector: 'app-energy-form-result',
    templateUrl: './energy-form-result.component.html',
    styleUrls: ['./energy-form-result.component.css']
})
export class EnergyFormResultComponent {
    @Input()
    energyFormTyped: EnergyFormTyped;
}
