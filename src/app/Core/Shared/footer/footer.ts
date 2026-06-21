import { Component, HostBinding } from '@angular/core';
import { UserDefine } from '../userDefine.directive';

@Component({
  selector: 'app-footer',
  imports: [UserDefine],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @HostBinding('style.color') styleColor: string = 'red';

  @HostBinding('attr.user-attr') CustomAttr: string = 'user-attr';
  @HostBinding('class.footer-section') ClassName: string = 'footer-section';
}
