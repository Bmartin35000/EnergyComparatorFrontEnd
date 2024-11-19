import {Component, OnInit} from '@angular/core';
import {EnergyService} from "../energy.service";
import {EnergyEstimation} from "../energy-estimation-named/energy-estimation/EnergyEstimation";
import {EnergyType} from "../energy-estimation-named/energy-estimation/energy-form/EnergyType";

@Component({
    selector: 'app-energy-estimation-list',
    templateUrl: './energy-estimation-list.component.html',
    styleUrls: ['./energy-estimation-list.component.css']
})
export class EnergyEstimationListComponent implements OnInit {

    energyService: EnergyService;
    energyEstimations: EnergyEstimation[];
    displayedColumns: string[] = ['offerName', 'energySupplier', 'energyPrice', 'gasPrice', 'totalPrice'];

    constructor(energyService: EnergyService) {
        this.energyService = energyService;
    }

    ngOnInit(): void {
        const energyEstimationMock: EnergyEstimation = {
            energy: {
                type: EnergyType.Energy,
                total: {
                    subscription: {
                        monthlyPrice: 5,
                        annualPrice: 60
                    },
                    kilowatt: {
                        monthlyPrice: 10,
                        annualPrice: 120
                    }
                }
            },
            gas: {
                type: EnergyType.Gas,
                total: {
                    subscription: {
                        monthlyPrice: 5,
                        annualPrice: 60
                    },
                    kilowatt: {
                        monthlyPrice: 10,
                        annualPrice: 120
                    }
                }
            },
            energySupplier: "edf",
            offerName: "super",
        };

        this.energyService.addEnergyEstimations(energyEstimationMock);
        this.energyEstimations = this.energyService.getEnergyEstimations();
        console.log(this.energyEstimations);
    }

}
