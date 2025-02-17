import { Component, } from '@angular/core';
import { CardComponent } from '../../../library/card/card.component';
import { TaskService } from '../../../../services/task.service';
import { TaskClick, TaskList } from '../../../../models/data.model';
import { NgFor, NgIf,  } from '@angular/common';
import { CardOuput } from '../../../library/models/output.model';

@Component({
  selector: 'app-tasks-view-list',
  imports: [CardComponent, NgFor, NgIf],
  templateUrl: './tasks-view-list.component.html',
  styleUrl: './tasks-view-list.component.scss',
})
export class TasksViewListComponent {
  constructor(private readonly taskService: TaskService) {}

  isSelected(idList:number):boolean{
    let listSelected = this.taskService.getTaskListSelected(idList)
    return listSelected ;
  }

  getLists(): TaskList[] {
    return this.taskService.getTaskList();
  }

  getList(id: number): TaskList {
    return this.taskService.getTaskListById(id)!;
  }

  handleCardOutput(event:CardOuput){
    let data: TaskClick = {
      idList: event.idList,
      idTask: event.idTask
    }
    this.taskService.setTaskClick(data)
    this.taskService.setTaskDone(this.taskService.getTaskById(event.idList,event.idTask),event.isChecked);
  }

  handleAddItemToCard(event:number){
    this.taskService.setTaskClick(
      {
        idList: event,
        idTask: -2
      }
    )
  }
  handleDeleteCard(event:number){
    this.taskService.setTaskClick(this.taskService.noSubTaskClick)
    this.taskService.deleteTaskList(event)
    
  }
}

