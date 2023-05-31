import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Expense } from '../../../expenses/domain/expense';
import { User } from '../../../users/domain/user';
import { UserWithBalance } from '../../../users/domain/userWithBalance';
import { GetUsersWithBalance } from '../../../users/application/get-users-with-balance';

@Component({
  selector: 'app-balances-list',
  templateUrl: './balances-list.component.html',
  styleUrls: ['./balances-list.component.css'],
})
export class BalancesListComponent implements OnInit, DoCheck {
  @Input() expenses: Expense[] = [];
  @Input() users: User[] = [];
  usersWithBalance: UserWithBalance[] = [];
  usersCount: number = 0;
  totalGroupExpenses:number = 0;

  constructor(private getUsersWithBalance: GetUsersWithBalance) {}

  ngOnInit(): void {
    this.usersWithBalance = this.getUsersWithBalance.execute(
      this.expenses,
      this.users
    );
  }
  ngDoCheck() {
    this.usersWithBalance = this.getUsersWithBalance.execute(
      this.expenses,
      this.users
    );
  }
}
