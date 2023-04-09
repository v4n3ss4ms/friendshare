import { NgModule } from '@angular/core';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
