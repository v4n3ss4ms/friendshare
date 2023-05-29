import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../features/users/domain/user';
import { GetOrderedExpensesByRecent } from '../../application/get-ordered-expenses-by-recent';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
})
export class ExpensesListComponent implements OnInit, DoCheck {
  @Input() expenses = [] as Expense[];
  @Input() users = [] as User[];
  orderedExpenses = [] as Expense[];
  constructor(private getOrderedExpensesByRecent: GetOrderedExpensesByRecent) {}

  ngOnInit(): void {
    this.orderedExpenses = this.getOrderedExpensesByRecent.execute(
      this.expenses
    );
  }
  ngDoCheck() {
    this.orderedExpenses = this.getOrderedExpensesByRecent.execute(
      this.expenses
    );
  }
}
