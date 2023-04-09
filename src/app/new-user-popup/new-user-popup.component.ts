import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../domain/user';
import { GetRandomNumber } from '../../application/get-random-number';

@Component({
  selector: 'app-new-user-popup',
  templateUrl: './new-user-popup.component.html',
  styleUrls: ['./new-user-popup.component.css']
})
export class NewUserPopupComponent implements OnInit{
  @Output() newUserEvent = new EventEmitter<User>();
  @Output() closeNewUserEvent = new EventEmitter();
  name = new FormControl('');
  constructor(
    private getRandomNumber: GetRandomNumber
  ) {}

  ngOnInit(): void {}
  onCancel(): void {
    this.closeNewUserEvent.emit();
  }

  onSaveUser(): void {

    const newUser: User = {
      id: this.getRandomNumber.execute(),
      name: this.name.value || 'No name',
    };
    this.newUserEvent.emit(newUser);
  }
}
