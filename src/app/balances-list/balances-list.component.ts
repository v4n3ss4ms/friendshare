import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../domain/user';
import { UserWithBalance } from '../../domain/userWithBalance';
import { GetUsersWithBalance } from '../../application/get-users-with-balance';

@Component({
  selector: 'app-balances-list',
  templateUrl: './balances-list.component.html',
  styleUrls: ['./balances-list.component.css'],
})

export class BalancesListComponent implements OnInit {
  @Input() expenses = [] as Expense[];
  @Input() users = [] as User[];
  usersWithBalance = [] as UserWithBalance[];
  usersCount = 0 as number;
  totalGroupExpenses = 0 as number;

  constructor(private getUsersWithBalance: GetUsersWithBalance) {}

  ngOnInit(): void {
    this.usersWithBalance = this.getUsersWithBalance.execute(this.expenses, this.users);
  }

  ngOnChange(): void {}
}
