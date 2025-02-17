import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskList } from '../../../models/data.model';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NgFor, NgIf } from '@angular/common';
import { CheckboxFieldComponent } from '../checkbox-field/checkbox-field.component';
import { CheckBoxFieldOuput } from '../models/output.model';

@Component({
  selector: 'app-card',
  imports: [NgFor,NgIf,MenuItemComponent, CheckboxFieldComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    '[style.--card-width]': 'width',
    '[style.--card-height]': 'height',
    '[style.--card-padding]': 'padding',
    '[style.--card-margin]': 'margin',
    '[style.--card-border-radius]': 'borderRadius',
  },
})
export class CardComponent {
  @Input() idTaskList: number = -1;
  @Input() tasklist!: TaskList;
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() padding: string = '32px 16px';
  @Input() margin: string = '';
  @Input() borderRadius: string = '8px';
  @Output() deleteCard = new EventEmitter<number>();
  @Output() addItemToCard = new EventEmitter<number>();
  @Output() cardOutput = new EventEmitter<{
    idList: number;
    idTask: number;
    isChecked: boolean;
  }>();
  
  showCompletedTasks:boolean = false
  getTasks(): Task[] {
    return this.tasklist.tasks;
  }


  handleCfOuput(event: { idCf: number; isChecked: boolean }) {
    this.cardOutput.emit({
      idList: this.idTaskList,
      idTask: event.idCf,
      isChecked: event.isChecked,
    });
  }

  handleShowCompletedTask(event:CheckBoxFieldOuput){
    this.showCompletedTasks = event.isChecked
  }

  handleAddNewTask(){
    this.addItemToCard.emit(this.idTaskList);
  }

  handleDeleteList(){
    this.deleteCard.emit(this.idTaskList);

  }

}
