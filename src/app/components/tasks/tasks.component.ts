import { Component } from '@angular/core';

import { TaskHeaderComponent } from './tasks-header/tasks-header.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { TaskService } from '../../services/task.service';
import { TaskEditorComponent } from "./task-editor/task-editor.component";
import { Task, TaskClick } from '../../models/data.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [TaskHeaderComponent, TasksViewComponent, TaskEditorComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {

  constructor(private readonly taskService:TaskService){
  }
  getAppTasks():number{
    return this.taskService.getntasks()
  }

  getTaskClick():TaskClick{
    return this.taskService.getTaskClick()
  }

  getTask():Task{
    return this.taskService.getTaskById(
      this.getTaskClick().idList,
      this.getTaskClick().idTask
    );
  }

  closeEditor(){
    this.taskService.setTaskClick(this.taskService.noSubTaskClick)
  }
}
