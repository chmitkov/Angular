import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'node:util';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    exponent = isNumber(exponent) ? exponent : 1
    return Math.pow(value, exponent);
  }

}
