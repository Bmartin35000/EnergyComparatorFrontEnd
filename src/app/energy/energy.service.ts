import {Injectable} from '@angular/core';
import {EnergyEstimation} from "./energy-estimation-named/energy-estimation/EnergyEstimation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class EnergyService {

    urlBackEndServer = "http://localhost:8080/";

    constructor(private httpClient: HttpClient) {
    }

    addEnergyEstimations(energyEstimation: EnergyEstimation) {
        return this.httpClient.post(this.urlBackEndServer + "energyEstimation", energyEstimation);
    }

    getEnergyEstimations(): Observable<EnergyEstimation[]> {
        return this.httpClient.get<EnergyEstimation[]>(this.urlBackEndServer + "energyEstimations");
    }

    editEnergyEstimation(energyEstimation: EnergyEstimation) {
        return this.httpClient.put(this.urlBackEndServer + "energyEstimation/", energyEstimation);
    }

    deleteEnergyEstimations() {
        return this.httpClient.delete<EnergyEstimation[]>(this.urlBackEndServer + "energyEstimations");
    }

    deleteEnergyEstimation(energyEstimation: EnergyEstimation) {
        return this.httpClient.delete<EnergyEstimation>(this.urlBackEndServer + "energyEstimation/" + energyEstimation.id);
    }

    annualPrice(estimation: EnergyEstimation) {
        return estimation.electricity.total!.subscription.annualPrice + estimation.gas.total!.subscription.annualPrice +
            estimation.electricity.total!.kilowatt.annualPrice + estimation.gas.total!.kilowatt.annualPrice;
    }
}
