import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../../users/domain/user';
import { GetOrderedExpensesByRecent } from '../../application/get-ordered-expenses-by-recent';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush // take a look

})
export class ExpensesListComponent implements OnInit, DoCheck {
  @Input() expenses: Expense[] = [];
  @Input() users: User[] = [];
  orderedExpenses: Expense[] = [];
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
