import { UsersLocalRepository } from '../features/users/infrastructure/users-local.repository';
import { ExpensesLocalRepository } from '../features/expenses/infrastructure/expenses-local.repository';
import { fireEvent, render, screen } from '@testing-library/angular';
import { USERS_REPOSITORY } from '../features/users/application/users.injection-tokens';
import { EXPENSES_REPOSITORY } from '../features/expenses/application/expenses.injection-tokens';
import { AppComponent } from '../app/app.component';
import {provideRouter} from "@angular/router";
import {routes} from "../app/app.routes";

describe('Create user', () => {
  it(`should open add new user popup`, async () => {
    await setup();
    fireEvent.click(screen.getByTestId('addUserBtn'));
    expect(screen.getByTestId('newUserPopup')).toBeTruthy();
  });

  // it(`should add new expense`, async () => {
  //   const {fixture} = await setup();
  //   fixture.detectChanges();
  //   fireEvent.click(screen.getByTestId('addUserBtn'));
  //
  //   await userEvent.type(screen.getByTestId('newUserName'), 'this is a new user');
  //   console.log(fixture.debugElement.nativeElement.innerHTML);
  //   fireEvent.click(screen.getByTestId('saveUserBtn'));
  //   expect(screen.getByText('this is a new user')).toBeTruthy();
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
