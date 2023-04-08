import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../domain/user';
import { Expense } from '../../domain/expense';
import { Currency } from '../../domain/currency';
import { GetRandomNumber } from '../../application/get-random-number';
import { StringToFloat } from '../../application/string-to-float';

@Component({
  selector: 'app-new-expense-popup',
  templateUrl: './new-expense-popup.component.html',
  styleUrls: ['./new-expense-popup.component.css'],
})
export class NewExpensePopupComponent implements OnInit {
  @Input() users = [] as User[];
  @Output() newExpenseEvent = new EventEmitter<Expense>();
  @Output() closeNewExpenseEvent = new EventEmitter();
  name = new FormControl('');
  amount = new FormControl('');
  user = new FormControl('');

  constructor(
    private getRandomNumber: GetRandomNumber,
    private stringToFloat: StringToFloat
  ) {}

  ngOnInit(): void {}
  onCancel(): void {
    this.closeNewExpenseEvent.emit();
  }

  onSaveExpense(): void {
    const now: number = new Date().getTime();
    const amount = this.stringToFloat.execute(this.amount.value);

    const newExpense: Expense = {
      id: this.getRandomNumber.execute(),
      name: this.name.value || 'No name',
      amount: amount,
      currency: Currency.euro, // Hardcoded - Please check ReadMe
      date: now,
      userId: this.stringToFloat.execute(this.user.value),
    };
    this.newExpenseEvent.emit(newExpense);
  }
}
