import { Component} from '@angular/core';
import { TasksViewListComponent } from './tasks-view-list/tasks-view-list.component';
import { TasksViewBoardComponent } from './tasks-view-board/tasks-view-board.component';
import { TasksViewCalendarComponent } from './tasks-view-calendar/tasks-view-calendar.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { TasksViewOptionsComponent } from './tasks-view-options/tasks-view-options.component';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-tasks-view',
  imports: [
    NgSwitch,
    NgSwitchCase,
    TasksViewListComponent,
    TasksViewBoardComponent,
    TasksViewCalendarComponent,
    TasksViewOptionsComponent,
  ],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss',
})
export class TasksViewComponent {
  constructor(private readonly taskService: TaskService) {}
  getView(): string {
    return this.taskService.getTaskView();
  }
}
