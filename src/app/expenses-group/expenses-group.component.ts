import { Component, OnInit } from '@angular/core';
import { Expense } from '../../features/expenses/domain/expense';
import { User } from '../../features/users/domain/user';
import { GetExpenses} from "../../features/expenses/application/get-expenses";
import { AddExpense} from "../../features/expenses/application/add-expense";
import { GetUsers} from "../../features/users/application/get-users";
import { AddUser} from "../../features/users/application/add-user";

@Component({
  selector: 'app-expenses-group',
  templateUrl: './expenses-group.component.html',
  styleUrls: ['./expenses-group.component.css'],
})

export class ExpensesGroupComponent implements OnInit {
  expensesData = [] as Expense[]; // !!
  usersData = [] as User[]; // !!
  isOpenAddUserPopup = false as boolean;
  isOpenAddExpensePopup = false as boolean;

  constructor(
    private getExpenses: GetExpenses,
    private addExpense: AddExpense,
    private getUsers: GetUsers,
    private addUser: AddUser
) {}

  ngOnInit(): void {
    this.expensesData = this.getExpenses.execute();
    this.usersData = this.getUsers.execute();
  }

  onOpenAddUser(): void {
    this.isOpenAddUserPopup = true;
  }

  onCloseAddUser(): void {
    this.isOpenAddUserPopup = false;
  }

  onAddUser(user: User): void {
    this.isOpenAddUserPopup = false;
    this.addUser.execute(user);
  }

  onOpenAddExpense(): void {
    this.isOpenAddExpensePopup = true;
  }

  onCloseAddExpense(): void {
    this.isOpenAddExpensePopup = false;
  }

  onAddExpense(expense: Expense): void {
    this.isOpenAddExpensePopup = false;
    this.addExpense.execute(expense);
  }
}
