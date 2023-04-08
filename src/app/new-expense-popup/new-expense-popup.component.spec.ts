import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NewExpensePopupComponent } from './new-expense-popup.component';

describe('NewExpensePopupComponent', () => {
  let component: NewExpensePopupComponent;
  let fixture: ComponentFixture<NewExpensePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewExpensePopupComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewExpensePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
