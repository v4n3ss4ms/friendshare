import { Component, OnInit } from '@angular/core';
import { ExpensesLocalRepository } from '../../repositories/expenses-local-repository';
import { Expense } from '../../domain/expense';
import { UsersLocalRepository } from '../../repositories/users-local-repository';
import { User } from '../../domain/user';
import { Currency } from '../../domain/currency';

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
    private usersLocalRepository: UsersLocalRepository,
  ) {}

  ngOnInit(): void {
    this.expensesData = this.expensesLocalRepository.getAll();
    this.usersData = this.usersLocalRepository.getAll();    
  }

  onOpenAddUser(): void {

  }

  onOpenAddExpense(): void {
    this.isOpenAddExpensePopup = true;
  }
  onCloseAddExpense(): void {
    this.isOpenAddExpensePopup = false;
  }

  onAddUser(): void {
    console.log('onAddUser');
/*     this.usersLocalRepository.addUser({
      id: 259,
      name: 'Ana222',
    }); */
  }
  addExpense(expense: Expense): void {
    this.isOpenAddExpensePopup = false;
    this.expensesLocalRepository.addExpense(expense);
  }
}
