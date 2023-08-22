import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../../users/domain/user';
import { GetOrderedExpensesByRecentQuery } from '../../application/get-ordered-expenses-by-recent.query';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
  imports: [ExpenseItemComponent, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesListComponent implements OnInit, DoCheck {
  @Input() expenses: Expense[] = [];
  @Input() users: User[] = [];

  orderedExpenses: Expense[] = [];

  constructor(private readonly getOrderedExpensesByRecent: GetOrderedExpensesByRecentQuery) {}

  ngOnInit(): void {
    this.orderedExpenses = this.getOrderedExpensesByRecent.execute(this.expenses);
  }

  ngDoCheck() {
    this.orderedExpenses = this.getOrderedExpensesByRecent.execute(this.expenses);
  }
}
