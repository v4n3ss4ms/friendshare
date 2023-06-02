import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from '../features/core/delivery/header/header.component';
import {FooterComponent} from '../features/core/delivery/footer/footer.component';
import {ExpensesGroupComponent} from '../features/expenses/delivery/expenses-group/expenses-group.component';
import {ExpensesListComponent} from '../features/expenses/delivery/expenses-list/expenses-list.component';
import {ExpenseItemComponent} from '../features/expenses/delivery/expense-item/expense-item.component';
import {BalancesListComponent} from '../features/balances/delivery/balances-list/balances-list.component';
import {BalanceItemComponent} from '../features/balances/delivery/balance-item/balance-item.component';
import {NewExpensePopupComponent} from '../features/expenses/delivery/new-expense-popup/new-expense-popup.component';
import {NewUserPopupComponent} from '../features/users/delivery/new-user-popup/new-user-popup.component';

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
  exports: [
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
})
export class ComponentsModule { }
