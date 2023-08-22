import { Component, Input, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Expense } from '../../../expenses/domain/expense';
import { User } from '../../../users/domain/user';
import { UserWithBalance } from '../../../users/domain/user-with-balance';
import { GetUsersWithBalanceQuery } from '../../../users/application/get-users-with-balance.query';
import { BalanceItemComponent } from '../balance-item/balance-item.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-balances-list',
  templateUrl: './balances-list.component.html',
  styleUrls: ['./balances-list.component.css'],
  imports: [BalanceItemComponent, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalancesListComponent implements OnInit, DoCheck {
  @Input() expenses: Expense[] = [];
  @Input() users: User[] = [];
  usersWithBalance: UserWithBalance[] = [];

  constructor(private getUsersWithBalance: GetUsersWithBalanceQuery) {}

  ngOnInit(): void {
    this.usersWithBalance = this.getUsersWithBalance.execute(this.expenses, this.users);
  }

  ngDoCheck() {
    this.usersWithBalance = this.getUsersWithBalance.execute(this.expenses, this.users);
  }
}
