import { AddExpense } from './add-expense';
import { Expense } from '../domain/expense';
import { Currency } from '../../core/domain/currency';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';
import {TestBed} from "@angular/core/testing";
import {EXPENSES_REPOSITORY, USERS_REPOSITORY} from "../../../app/app.module";
import {UsersLocalRepository} from "../../users/infrastructure/users-local-repository";

const expensesLocalRepository = new ExpensesLocalRepository();
const addExpense: AddExpense = new AddExpense(expensesLocalRepository);

const expenseData: Expense = {
    id: 567,
    name: 'flores',
    amount: 35,
    currency: Currency.euro,
    date: 1685365588694,
    userId: 1,
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
    jest.spyOn(expensesLocalRepository, 'addExpense');
  });
  it('should add an expense', () => {
    addExpense.execute(expenseData);
    expect(expensesLocalRepository.addExpense).toHaveBeenCalledWith(expenseData);
  });
});
