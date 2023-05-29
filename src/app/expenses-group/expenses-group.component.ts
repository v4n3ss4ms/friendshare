import { Component, OnInit } from '@angular/core';
import { Expense } from '../../features/expenses/domain/expense';
import { UsersLocalRepository } from '../../features/users/infrastructure/users-local-repository';
import { User } from '../../features/users/domain/user';
import { GetExpenses} from "../../features/expenses/application/get-expenses";
import { AddExpense} from "../../features/expenses/application/add-expense";

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
    private usersLocalRepository: UsersLocalRepository,
    private getExpenses: GetExpenses,
    private addExpense: AddExpense
) {}

  ngOnInit(): void {
    this.expensesData = this.getExpenses.execute(); // !!
    this.usersData = this.usersLocalRepository.getAll(); // !!
  }

  onOpenAddUser(): void {
    this.isOpenAddUserPopup = true;
  }
  onCloseAddUser(): void {
    this.isOpenAddUserPopup = false;
  }

  addUser(user: User): void {
    this.isOpenAddUserPopup = false;
    this.usersLocalRepository.addUser(user); // !!
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
