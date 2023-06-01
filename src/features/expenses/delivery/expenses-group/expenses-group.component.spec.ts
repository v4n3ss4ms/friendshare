import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesGroupComponent } from './expenses-group.component';

import { ExpensesListComponent } from '../expenses-list/expenses-list.component';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { BalancesListComponent } from '../../../balances/delivery/balances-list/balances-list.component';
import { BalanceItemComponent } from '../../../balances/delivery/balance-item/balance-item.component';
import { NewExpensePopupComponent } from '../new-expense-popup/new-expense-popup.component';
import { NewUserPopupComponent } from '../../../users/delivery/new-user-popup/new-user-popup.component';
import {UsersLocalRepository} from "../../../users/infrastructure/users-local-repository";
import {ExpensesLocalRepository} from "../../infrastructure/expenses-local-repository";
import {EXPENSES_REPOSITORY, USERS_REPOSITORY} from "../../../../app/app.module";

describe('ExpensesGroupComponent', () => {
  let component: ExpensesGroupComponent;
  let fixture: ComponentFixture<ExpensesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExpensesGroupComponent,
        ExpensesListComponent,
        ExpenseItemComponent,
        BalancesListComponent,
        BalanceItemComponent,
        NewExpensePopupComponent,
        NewUserPopupComponent,
      ],
      providers: [{
        provide: USERS_REPOSITORY,
        useClass: UsersLocalRepository,
      },
      {
        provide: EXPENSES_REPOSITORY,
        useClass: ExpensesLocalRepository,
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
