import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesGroupComponent } from './expenses-group.component';

describe('ExpensesGroupComponent', () => {
  let component: ExpensesGroupComponent;
  let fixture: ComponentFixture<ExpensesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
