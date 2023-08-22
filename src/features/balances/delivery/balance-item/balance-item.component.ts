import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserWithBalance } from '../../../users/domain/user-with-balance';

@Component({
  standalone: true,
  selector: 'app-balance-item',
  templateUrl: './balance-item.component.html',
  styleUrls: ['./balance-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceItemComponent {
  @Input() userWithBalance!: UserWithBalance;
}
