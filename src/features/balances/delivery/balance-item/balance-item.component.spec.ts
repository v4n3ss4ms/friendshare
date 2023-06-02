import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BalanceItemComponent} from './balance-item.component';
import {Currency} from "../../../core/domain/currency";

describe('BalanceItemComponent', () => {
  let component: BalanceItemComponent;
  let fixture: ComponentFixture<BalanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalanceItemComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(BalanceItemComponent);
    component = fixture.componentInstance;
    component.userWithBalance = {
      user: {
        id: 45,
        name: 'name',
      },
      balance: {
        balanceAmount: 99,
        currency: Currency.euro,
        totalExpenses: 89,
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
