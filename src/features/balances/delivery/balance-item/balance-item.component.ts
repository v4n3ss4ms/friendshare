import { Component, Input } from '@angular/core';
import { UserWithBalance } from '../../../users/domain/userWithBalance';

@Component({
  selector: 'app-balance-item',
  templateUrl: './balance-item.component.html',
  styleUrls: ['./balance-item.component.css']
})
export class BalanceItemComponent {
  // @Input() userWithBalance: Partial<UserWithBalance> = {}; // !!  Object is possibly 'undefined'.
  @Input() userWithBalance = {} as UserWithBalance;

  ngOnInit(): void {}
}
