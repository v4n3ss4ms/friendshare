import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpensesGroupComponent } from './expenses-group/expenses-group.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseItemComponent } from './expense-item/expense-item.component';
import { BalancesListComponent } from './balances-list/balances-list.component';
import { BalanceItemComponent } from './balance-item/balance-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExpensesGroupComponent,
    ExpensesListComponent,
    ExpenseItemComponent,
    BalancesListComponent,
    BalanceItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
