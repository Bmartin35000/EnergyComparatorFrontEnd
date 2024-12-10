import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EnergyEstimation} from "../energy-estimation-named/energy-estimation/EnergyEstimation";

@Component({
    selector: 'app-energy-estimation-dialog',
    templateUrl: './energy-estimation-dialog.component.html',
    styleUrls: ['./energy-estimation-dialog.component.css']
})
export class EnergyEstimationDialogComponent {

    energySupplier = this.energyEstimation.energySupplier;
    offerName = this.energyEstimation.offerName;

    form: FormGroup = new FormGroup({
        energySupplier: new FormControl(this.energySupplier),
        offerName: new FormControl(this.offerName),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) public energyEstimation: EnergyEstimation,
        public dialogRef: MatDialogRef<EnergyEstimationDialogComponent>
    ) {
    }

    onSubmit() {
        this.energyEstimation.energySupplier = this.form.value.energySupplier;
        this.energyEstimation.offerName = this.form.value.offerName;
        this.dialogRef.close();
    }

    onCancel() {
        this.dialogRef.close();
    }
}
