import {Injectable} from '@angular/core';
import {EnergyEstimation} from "./energy-estimation-named/energy-estimation/EnergyEstimation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class EnergyService {

    constructor(private httpClient: HttpClient) {
    }

    addEnergyEstimations(energyEstimation: EnergyEstimation) {
        this.httpClient.post("http://localhost:8080/energyEstimation", energyEstimation).pipe().subscribe((res) => console.log(res));
    }

    getEnergyEstimations(): Observable<EnergyEstimation[]> {
        return this.httpClient.get<EnergyEstimation[]>("http://localhost:8080/energyEstimations");
    }

    deleteEnergyEstimations() {
        this.httpClient.delete<EnergyEstimation[]>("http://localhost:8080/energyEstimations").subscribe();
    }

    annualPrice(estimation: EnergyEstimation) {
        return estimation.electricity.total!.subscription.annualPrice + estimation.gas.total!.subscription.annualPrice +
            estimation.electricity.total!.kilowatt.annualPrice + estimation.gas.total!.kilowatt.annualPrice;
    }
}
