import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import {UsersLocalRepository} from "../features/users/infrastructure/users-local-repository";
import {ExpensesLocalRepository} from "../features/expenses/infrastructure/expenses-local-repository";

export const USERS_REPOSITORY = new InjectionToken('UsersRepository');
export const EXPENSES_REPOSITORY = new InjectionToken('ExpensesRepository');

@NgModule({
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
    NewUserPopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: USERS_REPOSITORY,
    useClass: UsersLocalRepository,
  },
  {
    provide: EXPENSES_REPOSITORY,
    useClass: ExpensesLocalRepository,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
