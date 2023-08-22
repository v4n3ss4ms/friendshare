import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../domain/expense';
import { User } from '../../../users/domain/user';
import { GetUserNameQuery } from '../../../users/application/get-user-name.query';

@Component({
  standalone: true,
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseItemComponent implements OnInit {
  @Input({
    required: true,
  })
  expense!: Expense;

  @Input() users: User[] = [];
  date: string = '';

  constructor(public getUserName: GetUserNameQuery) {}

  ngOnInit(): void {
    const dateOptions: object = {
      hour12: false,
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    this.date = new Date(this.expense.date).toLocaleString([], dateOptions);
  }
}
