import { Component, Input } from '@angular/core';
import { UserWithBalance } from '../../../users/domain/userWithBalance';

@Component({
  selector: 'app-balance-item',
  templateUrl: './balance-item.component.html',
  styleUrls: ['./balance-item.component.css']
})
export class BalanceItemComponent {
  //@Input() userWithBalance: Partial<UserWithBalance> = {}; // !! start - Object is possibly 'undefined'
  //@Input() userWithBalance!: UserWithBalance; // !! UT - TypeError: Cannot read properties of undefined (reading 'name') // necesitaría añadir ? allí donde se lean las propiedades del obj en el compo: userWithBalance?.name
  @Input() userWithBalance = {} as UserWithBalance;

  ngOnInit(): void {}
}
