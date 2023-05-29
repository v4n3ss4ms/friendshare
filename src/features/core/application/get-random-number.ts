import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class GetRandomNumber {
  constructor() {}

  execute(): number {
    return Math.floor(Math.random() * (9999 - 100 + 1) + 100)
  }
}
