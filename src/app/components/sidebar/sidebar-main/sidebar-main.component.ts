import { Component, ElementRef, HostListener } from '@angular/core';
import { MenuItemComponent } from '../../library/menu-item/menu-item.component';
import { DividerComponent } from '../../library/divider/divider.component';
import { CheckboxFieldComponent } from '../../library/checkbox-field/checkbox-field.component';
import { NgFor } from '@angular/common';
import { TaskList } from '../../../models/data.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-sidebar-main',
  imports: [MenuItemComponent, DividerComponent, CheckboxFieldComponent, NgFor],
  templateUrl: './sidebar-main.component.html',
  styleUrl: './sidebar-main.component.scss',
})
export class SidebarMainComponent {
  Lists: TaskList[] = [];
  //Nouvelle liste
  textEdit: boolean = false;
  newList: string = '';

  enableInput() {
    this.textEdit = true;
  }
  disableInput() {
    this.textEdit = false;
  }
  handleEnterKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.disableInput();
      this.taskService.createTaskList(this.newList);
    }
    if (event.key === 'Escape') {
      this.disableInput();
    }
  }

  inputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newList = target.value;
  }

  handleCfOutput(event: { idCf: number; isChecked: boolean }) {
    this.taskService.setTaskListSelected(event.idCf, event.isChecked);
  }

  constructor(
    private readonly taskService: TaskService,
    private el: ElementRef
  ) {}
  ngOnInit() {
    this.Lists = this.taskService.appData.tasklist;
  }

  //Sidebar menu item
  itemMargin: string = '4px';
  items = [
    {
      showIcon: true,
      iconSrc: 'assets/icons/home.svg',
      text: 'Tâches',
      margin: this.itemMargin,
    },
    {
      showIcon: true,
      iconSrc: 'assets/icons/clear_day.svg',
      text: 'Ma journée',
      margin: this.itemMargin,
    },
    {
      showIcon: true,
      iconSrc: 'assets/icons/star.svg',
      text: 'Important',
      margin: this.itemMargin,
    },
  ];
}
