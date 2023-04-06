import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesListComponent } from './balances-list.component';

describe('BalancesListComponent', () => {
  let component: BalancesListComponent;
  let fixture: ComponentFixture<BalancesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
