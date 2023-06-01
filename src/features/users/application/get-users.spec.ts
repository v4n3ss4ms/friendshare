import { GetUsers } from './get-users';
import { UsersLocalRepository } from '../infrastructure/users-local-repository';
import {TestBed} from "@angular/core/testing";
import {ExpensesGroupComponent} from "../../expenses/delivery/expenses-group/expenses-group.component";
import {ExpensesListComponent} from "../../expenses/delivery/expenses-list/expenses-list.component";
import {ExpenseItemComponent} from "../../expenses/delivery/expense-item/expense-item.component";
import {BalancesListComponent} from "../../balances/delivery/balances-list/balances-list.component";
import {BalanceItemComponent} from "../../balances/delivery/balance-item/balance-item.component";
import {NewExpensePopupComponent} from "../../expenses/delivery/new-expense-popup/new-expense-popup.component";
import {NewUserPopupComponent} from "../delivery/new-user-popup/new-user-popup.component";
import {EXPENSES_REPOSITORY, USERS_REPOSITORY} from "../../../app/app.module";
import {ExpensesLocalRepository} from "../../expenses/infrastructure/expenses-local-repository";

const usersLocalRepository = new UsersLocalRepository();
const getUsers: GetUsers = new GetUsers(usersLocalRepository);


describe('GetExpenses', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: USERS_REPOSITORY,
        useClass: UsersLocalRepository,
      },
      {
        provide: EXPENSES_REPOSITORY,
        useClass: ExpensesLocalRepository,
      }],
    }).compileComponents();
    jest.spyOn(usersLocalRepository, 'getAll');
  });

  it('should return a list of users', () => {
    getUsers.execute();
    expect(usersLocalRepository.getAll).toHaveBeenCalled();
  });
});
