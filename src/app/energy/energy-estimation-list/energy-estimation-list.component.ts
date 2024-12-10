import {Component, OnInit} from '@angular/core';
import {EnergyService} from "../energy.service";
import {EnergyEstimation} from "../energy-estimation-named/energy-estimation/EnergyEstimation";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {EnergyEstimationDialogComponent} from "../energy-estimation-dialog/energy-estimation-dialog.component";

@Component({
    selector: 'app-energy-estimation-list',
    templateUrl: './energy-estimation-list.component.html',
    styleUrls: ['./energy-estimation-list.component.css']
})
export class EnergyEstimationListComponent implements OnInit {

    energyEstimations: EnergyEstimation[];
    displayedColumns: string[] = ['offerName', 'energySupplier', 'energyPrice', 'gasPrice', 'totalPrice', 'actions'];

    constructor(private energyService: EnergyService, private snackBar: MatSnackBar, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.refreshTable()
    }

    public refreshTable() {
        this.energyService.getEnergyEstimations().subscribe({
            next: (res) => {
                this.energyEstimations = res;
                this.sortTable();
            },
            error: (e) => this.snackBar.open('Erreur lors de la récupération ' + e.message, "OK", {
                duration: 10000,
                panelClass: ['red-snackbar']
            })
        });
    }

    public onDeleteAll() {
        this.energyService.deleteEnergyEstimations().subscribe({
            error: (e) => {
                this.snackBar.open('Erreur lors des suppression ' + e.message, "OK", {
                    duration: 10000,
                    panelClass: ['red-snackbar']
                });
            },
            complete: () => {
                this.snackBar.open('Estimations supprimées', "OK", {
                    duration: 3000,
                    panelClass: ['green-snackbar']
                });
                this.refreshTable();
            }
        });
    }

    public onDelete(energyEstimation: EnergyEstimation) {
        this.energyService.deleteEnergyEstimation(energyEstimation).subscribe({
            error: (e) =>
                this.snackBar.open('Erreur lors de la suppression : ' + e.message, "OK", {
                    duration: 10000,
                    panelClass: ['red-snackbar']
                }),
            complete: () => {
                this.snackBar.open('Estimation supprimée', "OK", {
                    duration: 3000,
                    panelClass: ['green-snackbar']
                });
                this.refreshTable();
            }
        });
    }

    public onEdit(energyEstimation: EnergyEstimation) {
        const dialogRef = this.dialog.open(EnergyEstimationDialogComponent, {
            data: energyEstimation
        });
        dialogRef.afterClosed().subscribe(() =>
            this.energyService.editEnergyEstimation(dialogRef.componentInstance.energyEstimation).subscribe(({
                error: (e) =>
                    this.snackBar.open('Erreur lors de l\'édition : ' + e.message, "OK", {
                        duration: 10000,
                        panelClass: ['red-snackbar']
                    }),
                complete: () => {
                    this.snackBar.open('Estimation éditée', "OK", {
                        duration: 3000,
                        panelClass: ['green-snackbar']
                    });
                    this.refreshTable();
                }
            })))
    }

    sortTable() {
        this.energyEstimations.sort((energyEstimation1: EnergyEstimation, energyEstimation2: EnergyEstimation) =>
            this.energyService.annualPrice(energyEstimation1) - this.energyService.annualPrice(energyEstimation2))
    }
}
