import { Component, Input } from '@angular/core';
import { UserWithBalance } from '../../features/users/domain/userWithBalance';

@Component({
  selector: 'app-balance-item',
  templateUrl: './balance-item.component.html',
  styleUrls: ['./balance-item.component.css']
})
export class BalanceItemComponent {
  @Input() userWithBalance = {} as UserWithBalance;

  ngOnInit(): void {}
}
