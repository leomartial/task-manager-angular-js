import { Component, EventEmitter, output, Output } from '@angular/core';
import { MenuItemComponent } from '../../../library/menu-item/menu-item.component';
import { NgFor } from '@angular/common';
import { TaskService } from '../../../../services/task.service';
@Component({
  selector: 'app-tasks-view-options',
  imports: [MenuItemComponent, NgFor],
  templateUrl: './tasks-view-options.component.html',
  styleUrl: './tasks-view-options.component.scss',
})
export class TasksViewOptionsComponent {
  views = [
    {
      name: 'tasksViewList',
      iconSrc: 'assets/icons/line_view.svg',
      text: 'Liste',
    },
    /*
    {
      name: 'tasksViewBoard',
      iconSrc: 'assets/icons/board.svg',
      text: 'Panneau',
    },
    {
      name: 'tasksViewCalendar',
      iconSrc: 'assets/icons/calendar.svg',
      text: 'Calendrier',
    },*/
  ];
  
  updateTaskView(view:string){
    this.taskService.setTaskView(view);
  };
  exportAppData(){
    this.taskService.exportAppData();
  };


  constructor(private readonly taskService:TaskService) {}
}
