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
  expensesData: Expense[] = [];
  usersData: User[] = [];
  constructor(
    private expensesLocalRepository: ExpensesLocalRepository,
    private usersLocalRepository: UsersLocalRepository
  ) {}

  ngOnInit(): void {
    this.expensesData = this.expensesLocalRepository.getAll();
    this.usersData = this.usersLocalRepository.getAll();
  }
  onAddUser(): void {
    console.log('onAddUser');
    this.usersLocalRepository.addUser({
      id: 259,
      name: 'Ana222',
    });
    console.log(this.usersData);
  }
  onAddExpense(): void {
    console.log('onAddExpense');
    this.expensesLocalRepository.addExpense({
      id: 89,
      name: 'copas',
      amount: 30,
      currency: Currency.euro,
      date: 1680280912000,
      userId: 11,
    });
    console.log(this.expensesData);
  }
}
