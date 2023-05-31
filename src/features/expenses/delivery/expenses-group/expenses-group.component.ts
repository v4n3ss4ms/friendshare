import { Component, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../../users/domain/user';
import { GetExpenses} from "../../application/get-expenses";
import { AddExpense} from "../../application/add-expense";
import { GetUsers} from "../../../users/application/get-users";
import { AddUser} from "../../../users/application/add-user";

@Component({
  selector: 'app-expenses-group',
  templateUrl: './expenses-group.component.html',
  styleUrls: ['./expenses-group.component.css'],
})

export class ExpensesGroupComponent implements OnInit {
  expensesData: Expense[] = [];
  usersData: User[] = [];
  isOpenAddUserPopup: boolean = false;
  isOpenAddExpensePopup: boolean = false;

  constructor(
    private getExpenses: GetExpenses,
    private addExpense: AddExpense,
    private getUsers: GetUsers,
    private addUser: AddUser
) {}

  async ngOnInit(): Promise<void> {
    this.expensesData = await this.getExpenses.execute();
    this.usersData = await this.getUsers.execute();
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
