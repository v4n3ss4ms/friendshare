import { UsersLocalRepository } from '../features/users/infrastructure/users-local.repository';
import { ExpensesLocalRepository } from '../features/expenses/infrastructure/expenses-local.repository';
import { fireEvent, render, screen } from '@testing-library/angular';
import { USERS_REPOSITORY } from '../features/users/application/users.injection-tokens';
import { EXPENSES_REPOSITORY } from '../features/expenses/application/expenses.injection-tokens';
import { AppComponent } from '../app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "../app/app.routes";

describe('Create expense', () => {
  it(`should render initial expenses`, async () => {
    await setup();
    expect(screen.getByText('patatas fritas')).toBeTruthy();
    expect(screen.getByText('cena')).toBeTruthy();
  });

  it(`should open add new expense popup`, async () => {
    await setup();
    fireEvent.click(screen.getByTestId('addExpenseBtn'));
    expect(screen.getByTestId('newExpensePopup')).toBeTruthy();
  });

  // it(`should add new expense`, async () => {
  //   const {fixture} = await setup();
  //   fixture.detectChanges();
  //   fireEvent.click(screen.getByTestId('addExpenseBtn'));
  //   await userEvent.type(screen.getByTestId('newExpenseName'), 'this is a new expense');
  //   await userEvent.type(screen.getByTestId('newExpenseAmount'), '999');
  //   //fireEvent.change(screen.getByTestId('newExpenseUser'), {target:{value:'1'}})
  //   await userEvent.selectOptions(screen.getByTestId('newExpenseUser'), '1');
  //   console.log(fixture.debugElement.nativeElement.innerHTML);
  //   fireEvent.click(screen.getByTestId('saveExpenseBtn'));
  //   expect(screen.getByText('999 €')).toBeTruthy();
  // });
});

async function setup() {
  return render(AppComponent, {
    providers: [
      {
        provide: USERS_REPOSITORY,
        useClass: UsersLocalRepository,
      },
      {
        provide: EXPENSES_REPOSITORY,
        useClass: ExpensesLocalRepository,
      },
      provideRouter(routes),
    ],
  });
}
