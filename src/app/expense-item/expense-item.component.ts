import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../features/users/domain/user';
import { GetUserName } from '../../features/users/application/get-user-name';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense = {} as Expense;
  @Input() users = [] as User[];
  date = '' as string;

  constructor(public getUserName: GetUserName) {}

  ngOnInit(): void {
    const dateOptions: object = {
      hour12: false,
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    this.date = new Date(this.expense.date).toLocaleString([], dateOptions);
  }
}
