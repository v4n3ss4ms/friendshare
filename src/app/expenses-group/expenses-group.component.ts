import { Component, OnInit } from '@angular/core';
import { ExpensesLocalRepository } from '../../repositories/expenses-local-repository';
import { Expense } from '../../domain/expense';
import { UsersLocalRepository } from '../../repositories/users-local-repository';
import { User } from '../../domain/user';

@Component({
  selector: 'app-expenses-group',
  templateUrl: './expenses-group.component.html',
  styleUrls: ['./expenses-group.component.css'],
})
export class ExpensesGroupComponent implements OnInit {
  expensesData = [] as Expense[];
  expenses = [] as Expense[];
  usersData = [] as User[];
  isOpenAddUserPopup = false as boolean;
  isOpenAddExpensePopup = false as boolean;

  constructor(
    private expensesLocalRepository: ExpensesLocalRepository,
    private usersLocalRepository: UsersLocalRepository
  ) {}

  ngOnInit(): void {
    this.expensesData = this.expensesLocalRepository.getAll();
    this.usersData = this.usersLocalRepository.getAll();
  }

  onOpenAddUser(): void {
    this.isOpenAddUserPopup = true;
  }
  onCloseAddUser(): void {
    this.isOpenAddUserPopup = false;
  }

  addUser(user: User): void {
    this.isOpenAddUserPopup = false;
    this.usersLocalRepository.addUser(user);
  }

  onOpenAddExpense(): void {
    this.isOpenAddExpensePopup = true;
  }

  onCloseAddExpense(): void {
    this.isOpenAddExpensePopup = false;
  }

  addExpense(expense: Expense): void {
    this.isOpenAddExpensePopup = false;
    this.expensesLocalRepository.addExpense(expense);
  }
}
