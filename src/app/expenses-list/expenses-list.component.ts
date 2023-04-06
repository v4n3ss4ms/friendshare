import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../domain/user';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent implements OnInit {
  @Input() expenses = [] as Expense[];
  @Input() users = [] as User[];
  ngOnInit(): void {
    console.log(this.expenses);
  }
}
