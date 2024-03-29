import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StringToFloat {
  constructor() {}

  execute(value: string | undefined | null): number {
    if (!value || isNaN(parseFloat(value))) {
      return 0;
    }
    return parseFloat(value);
  }
}
