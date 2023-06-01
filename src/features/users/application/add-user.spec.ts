import { AddUser } from './add-user';
import { User } from '../domain/user';
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
const addUser: AddUser = new AddUser(usersLocalRepository);

const userData: User = {
  id: 18,
  name: 'Pedro',
};

describe('AddExpense', () => {
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
    jest.spyOn(usersLocalRepository, 'addUser');
  });

  it('should add an expense', () => {
    addUser.execute(userData);
    expect(usersLocalRepository.addUser).toHaveBeenCalledWith(userData);
  });
});
