import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpensesGroupComponent } from './expenses-group/expenses-group.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { BalancesListComponent } from './balances-list/balances-list.component';
import { BalanceItemComponent } from './balance-item/balance-item.component';
import { NewExpensePopupComponent } from './new-expense-popup/new-expense-popup.component';
import { NewUserPopupComponent } from './new-user-popup/new-user-popup.component';

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
