import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  host:{
    '(click)':"onClick()",
    '[style.--icon-width]': 'width',
    '[style.--icon-height]': 'height',
    '[style.--icon-padding]': 'padding',
    '[style.--icon-margin]': 'margin',
  }
})
export class IconComponent {
  @Input() iconSrc:string = '';
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() padding: string = '';
  @Input() margin: string = '';

  @Output() clickEvent = new EventEmitter()
  onClick(){
    this.clickEvent.emit()
  }
}
