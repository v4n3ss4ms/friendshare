import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../domain/user';
import { GetRandomNumber } from '../../../../core/application/get-random-number';

@Component({
  standalone: true,
  selector: 'app-new-user-popup',
  templateUrl: './new-user-popup.component.html',
  styleUrls: ['./new-user-popup.component.css'],
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewUserPopupComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<User>();
  @Output() closeNewUserEvent = new EventEmitter();

  newUserForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private getRandomNumber: GetRandomNumber) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.closeNewUserEvent.emit();
  }

  onSaveUser(): void {
    const newUser: User = {
      id: this.getRandomNumber.execute(),
      name: this.newUserForm.value.name || 'No name',
    };
    this.newUserEvent.emit(newUser);
  }
}
