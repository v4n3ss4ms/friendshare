import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {USERS_REPOSITORY} from "../features/users/application/users.injection-tokens";
import {UsersLocalRepository} from "../features/users/infrastructure/users-local.repository";
import {EXPENSES_REPOSITORY} from "../features/expenses/application/expenses.injection-tokens";
import {ExpensesLocalRepository} from "../features/expenses/infrastructure/expenses-local.repository";

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: USERS_REPOSITORY,
      useClass: UsersLocalRepository,
    },
    {
      provide: EXPENSES_REPOSITORY,
      useClass: ExpensesLocalRepository,
    },
    provideRouter(routes)
  ]
};
