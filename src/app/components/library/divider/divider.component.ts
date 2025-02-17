import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  imports: [],
  templateUrl: './divider.component.html',
  host:{
    '[style.--divide-margin]':'margin',
    '[style.--divider-padding]':'padding',
    '[style.--divider-color]':'color',
    '[style.--divider-thickness]':'thickness',
    '[style.--divider-type]':'type',
  },
  styleUrl: './divider.component.scss',

})
export class DividerComponent {
  @Input() margin: string = '0px';
  @Input() padding: string = '4px 16px';
  @Input() color: string = '#9E9E9E';
  @Input() thickness: string = '1px';
  @Input() type: string = 'solid';
  
  
}
