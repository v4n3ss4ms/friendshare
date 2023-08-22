import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../users/domain/user';
import { Expense } from '../../domain/expense';
import { Currency } from '../../../../core/money/currency';
import { GetRandomNumber } from '../../../../core/application/get-random-number';
import { StringToFloat } from '../../../../core/application/string-to-float';
import { MonetaryValue } from '../../../../core/money/monetary-value';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-new-expense-popup',
  templateUrl: './new-expense-popup.component.html',
  styleUrls: ['./new-expense-popup.component.css'],
  imports: [NgFor, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewExpensePopupComponent implements OnInit {
  @Input() users: User[] = [];
  @Output() newExpenseEvent = new EventEmitter<Expense>();
  @Output() closeNewExpenseEvent = new EventEmitter();
  newExpenseForm = this.fb.group({
    name: ['', Validators.required],
    amount: ['', Validators.required],
    user: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private getRandomNumber: GetRandomNumber,
    private stringToFloat: StringToFloat,
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.closeNewExpenseEvent.emit();
  }

  onSaveExpense(): void {
    const now: number = new Date().getTime();
    const amount = this.stringToFloat.execute(this.newExpenseForm.value.amount);

    const newExpense: Expense = {
      id: this.getRandomNumber.execute(),
      name: this.newExpenseForm.value.name || 'No name',
      amount: MonetaryValue.create({ value: amount, currency: Currency.euro }),
      date: now,
      userId: this.stringToFloat.execute(this.newExpenseForm.value.user),
    };
    this.newExpenseEvent.emit(newExpense);
  }
}
