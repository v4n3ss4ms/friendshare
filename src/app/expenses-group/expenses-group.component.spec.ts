import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesGroupComponent } from './expenses-group.component';

import { ExpensesListComponent } from '../expenses-list/expenses-list.component';
import { ExpenseItemComponent } from '../expense-item/expense-item.component';
import { BalancesListComponent } from '../balances-list/balances-list.component';
import { BalanceItemComponent } from '../balance-item/balance-item.component';
import { NewExpensePopupComponent } from '../new-expense-popup/new-expense-popup.component';
import { NewUserPopupComponent } from '../new-user-popup/new-user-popup.component';

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
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
