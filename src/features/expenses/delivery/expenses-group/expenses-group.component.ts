import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../../users/domain/user';
import { GetExpensesQuery } from '../../application/get-expenses.query';
import { AddExpenseCommand } from '../../application/add-expense.command';
import { GetUsersQuery } from '../../../users/application/get-users.query';
import { AddUserCommand } from '../../../users/application/add-user.command';
import { ExpensesListComponent } from '../expenses-list/expenses-list.component';
import { BalancesListComponent } from '../../../balances/delivery/balances-list/balances-list.component';
import { NewUserPopupComponent } from '../../../users/delivery/new-user-popup/new-user-popup.component';
import { NewExpensePopupComponent } from '../new-expense-popup/new-expense-popup.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-expenses-group',
  templateUrl: './expenses-group.component.html',
  styleUrls: ['./expenses-group.component.css'],
  imports: [ExpensesListComponent, BalancesListComponent, NewUserPopupComponent, NewExpensePopupComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesGroupComponent implements OnInit {
  expensesData: Expense[] = [];
  usersData: User[] = [];
  isOpenAddUserPopup: boolean = false;
  isOpenAddExpensePopup: boolean = false;

  constructor(
    private readonly getExpenses: GetExpensesQuery,
    private readonly addExpense: AddExpenseCommand,
    private readonly getUsers: GetUsersQuery,
    private readonly addUser: AddUserCommand,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.setComponentData();
  }

  async setComponentData() {
    this.expensesData = await this.getExpenses.execute();
    this.usersData = await this.getUsers.execute();
    this.changeDetectorRef.detectChanges();
  }

  onOpenAddUser(): void {
    this.isOpenAddUserPopup = true;
  }

  onCloseAddUser(): void {
    this.isOpenAddUserPopup = false;
  }

  async onAddUser(user: User): Promise<void> {
    this.isOpenAddUserPopup = false;
    await this.addUser.execute(user);
    this.setComponentData();
  }

  onOpenAddExpense(): void {
    this.isOpenAddExpensePopup = true;
  }

  onCloseAddExpense(): void {
    this.isOpenAddExpensePopup = false;
  }

  async onAddExpense(expense: Expense): Promise<void> {
    this.isOpenAddExpensePopup = false;
    await this.addExpense.execute(expense);
    this.setComponentData();
  }
}
