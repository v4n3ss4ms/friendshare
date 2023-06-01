import { GetExpenses } from './get-expenses';
import { ExpensesLocalRepository } from '../infrastructure/expenses-local-repository';
import {TestBed} from "@angular/core/testing";
import {EXPENSES_REPOSITORY, USERS_REPOSITORY} from "../../../app/app.module";
import {UsersLocalRepository} from "../../users/infrastructure/users-local-repository";

const expensesLocalRepository = new ExpensesLocalRepository();
const getExpenses: GetExpenses = new GetExpenses(expensesLocalRepository);

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
    jest.spyOn(expensesLocalRepository, 'getAll');
  });

  it('should return a list of expenses', () => {
    getExpenses.execute();
    expect(expensesLocalRepository.getAll).toHaveBeenCalled();
  });
});
