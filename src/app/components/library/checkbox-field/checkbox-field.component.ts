import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DividerComponent } from '../divider/divider.component';
import { CheckBoxFieldOuput } from '../models/output.model';
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: 'app-checkbox-field',
  imports: [NgIf, CheckboxComponent, DividerComponent, IconComponent],
  templateUrl: './checkbox-field.component.html',
  styleUrl: './checkbox-field.component.scss',
  host: {
    '(click)': 'onHostClick()',
    '[style.--checkbox-field-padding]': 'padding',
  },
})
export class CheckboxFieldComponent {
  @Input() idCf!: number;
  @Input() hostClick: boolean = true; // Global click | Individual click
  @Input({ required: true }) text: string = '';
  @Input() iconCheckedSrc: string = '';
  @Input() iconUncheckedSrc: string = '';
  @Input() endText: string = '';
  @Input() showEndIconCf: boolean = false;
  @Input() showDeleteIcon: boolean = false;
  @Input() endIconCheckedSrc: string = '';
  @Input() endIconUncheckedSrc: string = '';
  @Input() padding: string = '12px 16px';
  @Input() addtextDecoration:boolean = false;
  @Input() showDividerTop: boolean = false;
  @Input() showDividerBottom: boolean = false;
  @Input() isChecked: boolean = false;
  @Input() isCheckedEnd: boolean = false;
  @Output() cfOutput = new EventEmitter<CheckBoxFieldOuput>();
  @Output() deleteOutput = new EventEmitter<number>();

  getOutput() {
    this.cfOutput.emit({
      idCf: this.idCf,
      isChecked: this.isChecked,
    });
  }

  showEndText() {
    return this.endText != '';
  }
  /* Icon in the beginning*/
  iconSrc() {
    return this.isChecked ? this.iconCheckedSrc : this.iconUncheckedSrc;
  }


  toggleOnly(){
    this.isChecked = !this.isChecked;
    
  }
  
  toggle() {
    this.isChecked = !this.isChecked;
    this.getOutput();
  }

  onIconClick() {
    if (!this.hostClick) {
      this.toggleOnly();
    }
  }


  onHostClick() {
    if (this.hostClick) this.toggle();
    else {
      this.getOutput();
    }
  }

  /* Icon in the end*/
  endToggle() {
    this.isCheckedEnd = !this.isCheckedEnd;
  }
  endIconSrc() {
    return this.isCheckedEnd? this.endIconCheckedSrc:this.endIconUncheckedSrc;
  }

  onEndIconClick() {
    if (!this.hostClick) {
      this.endToggle();
    }
  }
  onDeleteIconClick(){
    this.deleteOutput.emit(this.idCf);
  }
}
