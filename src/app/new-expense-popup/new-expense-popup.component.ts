import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../features/users/domain/user';
import { Expense } from '../../features/expenses/domain/expense';
import { Currency } from '../../features/core/domain/currency';
import { GetRandomNumber } from '../../features/core/application/get-random-number';
import { StringToFloat } from '../../features/core/application/string-to-float';

@Component({
  selector: 'app-new-expense-popup',
  templateUrl: './new-expense-popup.component.html',
  styleUrls: ['./new-expense-popup.component.css'],
})
export class NewExpensePopupComponent implements OnInit {
  @Input() users = [] as User[];
  @Output() newExpenseEvent = new EventEmitter<Expense>();
  @Output() closeNewExpenseEvent = new EventEmitter();
  name = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required]);
  user = new FormControl('', [Validators.required]);
  isValid = false as boolean;

  constructor(
    private getRandomNumber: GetRandomNumber,
    private stringToFloat: StringToFloat
  ) {}

  ngOnInit(): void {
    this.name.valueChanges.subscribe(() => this.updateIsValid());
    this.amount.valueChanges.subscribe(() => this.updateIsValid());
    this.user.valueChanges.subscribe(() => this.updateIsValid());
  }

  onCancel(): void {
    this.closeNewExpenseEvent.emit();
  }

  updateIsValid(): void {
    this.isValid = !(
      !!this.amount.errors ||
      !!this.name.errors ||
      !!this.user.errors
    );
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
