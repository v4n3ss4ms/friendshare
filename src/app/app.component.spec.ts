import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../features/core/delivery/header/header.component';
import { FooterComponent } from '../features/core/delivery/footer/footer.component';
import { ExpensesGroupComponent } from '../features/expenses/delivery/expenses-group/expenses-group.component';
import { ExpensesListComponent } from '../features/expenses/delivery/expenses-list/expenses-list.component';
import { ExpenseItemComponent } from '../features/expenses/delivery/expense-item/expense-item.component';
import { BalancesListComponent } from '../features/balances/delivery/balances-list/balances-list.component';
import { BalanceItemComponent } from '../features/balances/delivery/balance-item/balance-item.component';
import { NewExpensePopupComponent } from '../features/expenses/delivery/new-expense-popup/new-expense-popup.component';
import { NewUserPopupComponent } from '../features/users/delivery/new-user-popup/new-user-popup.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ExpensesGroupComponent,
        ExpensesListComponent,
        ExpenseItemComponent,
        BalancesListComponent,
        BalanceItemComponent,
        NewExpensePopupComponent,
        NewUserPopupComponent,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'friend$hare'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('friend$hare');
  });
});
