import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'roundedUp',
})
export class RoundedUp implements PipeTransform {
    transform(value: number): number {
        return Math.round(value);
    }
}