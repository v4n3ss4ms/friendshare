import {InjectionToken, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UsersLocalRepository} from "../features/users/infrastructure/users-local-repository";
import {ExpensesLocalRepository} from "../features/expenses/infrastructure/expenses-local-repository";
import {ComponentsModule} from "./components.module";

export const USERS_REPOSITORY = new InjectionToken('UsersRepository');
export const EXPENSES_REPOSITORY = new InjectionToken('ExpensesRepository');

@NgModule({
  imports: [
    ComponentsModule
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
