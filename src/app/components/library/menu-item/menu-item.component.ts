import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgClass, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  imports: [NgClass,NgIf, NgSwitch, NgSwitchCase],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  host:{
    '[style.--menu-item-padding]':'padding',
    '[style.--menu-item-margin]':'margin',
    '[style.--menu-item-gap]':'gap',
    '[style.--menu-item-icon-size]':'iconSize',
    '[style.--menu-item-end-icon-size]':'endIconSize',
    '[style.--menu-item-text-size]':'textSize',
  }
})
export class MenuItemComponent {

  @Input() menuItemName:string = '';

  @Input() padding:string = '12px 16px';
  @Input() margin:string = '0px';
  @Input() gap:string = '12px'



  @Input() showIcon:boolean = false;
  @Input() iconSrc:string = "";
  @Input() iconSize = "24px";
  @Input() text:string = "";
  @Input() textSize:string = "14px";

  @Input() isTextEditing: boolean = false;
  @Input() inputTextValue: string = ''
  @Input() showText:boolean = true;
  @Input() endElement:string = '';
  @Input() endIconSrc:string = '';
  @Input() endIconSize:string = '24px';
  @Input() endText:string = '';
  @Input() iconsHover:boolean = false;
  @Input() handleBlur: () => void = () => {}
  
  @Output() blurEvent = new EventEmitter<Event>();

  onBlur(event: Event) {
    this.blurEvent.emit(event);
  }
  constructor(private el:ElementRef){

  }


  
  
}
