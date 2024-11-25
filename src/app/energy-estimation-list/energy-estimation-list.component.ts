import {Component, OnInit} from '@angular/core';
import {EnergyService} from "../energy.service";
import {EnergyEstimation} from "../energy-estimation-named/energy-estimation/EnergyEstimation";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-energy-estimation-list',
    templateUrl: './energy-estimation-list.component.html',
    styleUrls: ['./energy-estimation-list.component.css']
})
export class EnergyEstimationListComponent implements OnInit {

    energyEstimations: EnergyEstimation[];
    displayedColumns: string[] = ['offerName', 'energySupplier', 'energyPrice', 'gasPrice', 'totalPrice'];

    constructor(private energyService: EnergyService, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.refreshTable()
    }

    public refreshTable() {
        this.energyService.getEnergyEstimations().subscribe((res) => {
            this.energyEstimations = res;
            this.sortTable();
        });
    }

    public onDeleteAll() {
        this.energyService.deleteEnergyEstimations();
        this.refreshTable();
        this.snackBar.open('Estimations supprimées', "OK", {
            duration: 3000,
            panelClass: ['green-snackbar', 'login-snackbar', 'center-top']
        });
    }

    sortTable() {
        this.energyEstimations.sort((energyEstimation1: EnergyEstimation, energyEstimation2: EnergyEstimation) =>
            this.energyService.annualPrice(energyEstimation1) - this.energyService.annualPrice(energyEstimation2))
    }
}
