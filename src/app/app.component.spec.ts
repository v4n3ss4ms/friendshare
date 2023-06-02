import {AppComponent} from './app.component';
import {UsersLocalRepository} from "../features/users/infrastructure/users-local-repository";
import {ExpensesLocalRepository} from "../features/expenses/infrastructure/expenses-local-repository";
import {EXPENSES_REPOSITORY, USERS_REPOSITORY} from "./app.module";
import {render} from "@testing-library/angular";
import {ComponentsModule} from "./components.module";

describe('AppComponent', () => {
  it(`should have as title 'friend$hare'`, async () => {
    const {findByText, fixture, detectChanges} = await setup();
    detectChanges();
    await Promise.resolve(process.nextTick);
    expect(findByText('friend$hare')).toBeTruthy();
    console.log(fixture.debugElement.nativeElement.innerHTML);
  });

});

async function setup() {
  return render(AppComponent,
    {
      imports: [ComponentsModule],
      providers: [
        {
          provide: USERS_REPOSITORY,
          useClass: UsersLocalRepository,
        },
        {
          provide: EXPENSES_REPOSITORY,
          useClass: ExpensesLocalRepository,
        }],
    });
}

