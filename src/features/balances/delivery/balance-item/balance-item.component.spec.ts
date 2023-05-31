import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceItemComponent } from './balance-item.component';

describe('BalanceItemComponent', () => {
  let component: BalanceItemComponent;
  let fixture: ComponentFixture<BalanceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
