import {Routes} from "@angular/router";
import {ExpensesGroupComponent} from "../features/expenses/delivery/expenses-group/expenses-group.component";

export const routes: Routes = [
  {path: '', component: ExpensesGroupComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
