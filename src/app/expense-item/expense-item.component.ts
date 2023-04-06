import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../domain/user';
import { GetUserName } from '../../application/get-user-name';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense = {} as Expense;
  @Input() users = [] as User[];

  constructor(private getUserName: GetUserName) {}

  ngOnInit(): void {
    console.log(this.getUserName.execute(10, this.users));
  }
}
