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
  expensesData: Expense[] = [];
  usersData: User[] = [];
  constructor(
    private expensesLocalRepository: ExpensesLocalRepository,
    private usersLocalRepository: UsersLocalRepository
  ) {}

  ngOnInit(): void {
    this.expensesData = this.expensesLocalRepository.findAll();
    this.usersData = this.usersLocalRepository.findAll();
  }
}
