import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../features/users/domain/user';
import { GetRandomNumber } from '../../features/core/application/get-random-number';

@Component({
  selector: 'app-new-user-popup',
  templateUrl: './new-user-popup.component.html',
  styleUrls: ['./new-user-popup.component.css'],
})
export class NewUserPopupComponent implements OnInit {
  @Output() newUserEvent = new EventEmitter<User>();
  @Output() closeNewUserEvent = new EventEmitter();
  name = new FormControl('');
  isValid = false as boolean;

  constructor(private getRandomNumber: GetRandomNumber) {}

  ngOnInit(): void {
    this.name.valueChanges.subscribe(() => this.updateIsValid());
  }

  onCancel(): void {
    this.closeNewUserEvent.emit();
  }

  updateIsValid(): void {
    this.isValid = !this.name.errors;
  }

  onSaveUser(): void {
    const newUser: User = {
      id: this.getRandomNumber.execute(),
      name: this.name.value || 'No name',
    };
    this.newUserEvent.emit(newUser);
  }
}
