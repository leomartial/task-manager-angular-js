import { Injectable, signal } from '@angular/core';
import {
  AppData,
  SubTask,
  SubTaskClick,
  Task,
  TaskClick,
  TaskList,
} from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //Signal
  initView = 'tasksViewList';
  noTaskClick: TaskClick = {
    idList: -1,
    idTask: -1,
  };
  noSubTaskClick: SubTaskClick = {
    idList: -1,
    idTask: -1,
    idSubTask: -1,
  };
  private readonly currentTaskClick = signal(this.noTaskClick);
  private readonly currentSubTaskClick = signal(this.noSubTaskClick);
  private readonly currentView = signal(this.initView);

  getTaskClick(): TaskClick {
    return this.currentTaskClick();
  }
  setTaskClick(data: TaskClick) {
    this.currentTaskClick.set(data);
  }

  getSubTaskClick(): SubTaskClick {
    return this.currentSubTaskClick();
  }
  setSubTaskClick(data: SubTaskClick) {
    this.currentSubTaskClick.set(data);
  }

  //Data
  appData: AppData = {
    name: 'task manager data',
    taskview: 'tasksViewList',
    tasklist: [
      {
        id: 0,
        name: 'Mes tâches',
        selected: true,
        tasks: [
          {
            id: 0,
            title: 'tache1',
            date: new Date(),
            desc: 'Lorem ipsum',
            subtasks: [
              {
                id: 0,
                title: 'première sous-tâche',
                done: false,
              },
              {
                id: 1,
                title: 'deuxième sous-tâche',
                done: true,
              },
            ],
            important: false,
            done: false,
          },
          {
            id: 1,
            title: 'deuxieme tache',
            date: new Date(),
            subtasks: [],
            important: false,
            done: true,
          },
        ],
      },
    ],
  };

  exportAppData(){
    const data = JSON.stringify(this.appData,null,2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json'; // Set the filename
    link.click();
    window.URL.revokeObjectURL(url);

  }

  getAppDataName(): string {
    return this.appData.name;
  }

  setTaskView(view: string) {
    this.currentView.set(view);
    this.appData.taskview = view;
  }
  getTaskView(): string {
    return this.currentView();
  }

  getnTasklist(): number {
    return this.appData.tasklist.length;
  }
  getTaskList(): TaskList[] {
    return this.appData.tasklist;
  }
  getTaskListSelected(id: number): boolean {
    let isSelected = this.appData.tasklist.find(
      (tasklist) => tasklist.id == id
    )!.selected;
    if (isSelected == undefined) {
      isSelected = false;
    }
    return isSelected;
  }
  getTaskListById(id: number): TaskList {
    let list: TaskList = {
      id: -1,
      name: '',
      selected: false,
      tasks: [],
    };
    const index = this.appData.tasklist.findIndex((list) => list.id === id);
    if (index !== -1) {
      list = this.appData.tasklist[index];
    }
    return list;
  }

  setTaskListSelected(id: number, selected: boolean) {
    if (id >= 0 && id < this.getnTasklist())
      this.appData.tasklist[id].selected = selected;
  }

  //CRUD TaskList
  createTaskList(name: string) {
    const newlist: TaskList = {
      id: this.appData.tasklist.length,
      name: name,
      selected: false,
      tasks: [],
    };
    this.appData.tasklist.push(newlist);
  }

  updateTaskListName(id: number, name: string) {
    const index = this.appData.tasklist.findIndex((list) => list.id === id);
    if (index !== -1) {
      this.appData.tasklist[index].name = name;
    }
  }

  deleteTaskList(id: number) {
    const index = this.appData.tasklist.findIndex((list) => list.id === id);
    if (index !== -1) {
      this.appData.tasklist.splice(index, 1);
    }
  }
  // isEditing: boolean = false;

  //Task
  createTask(taskList: TaskList, title: string, date: Date, desc?: string) {
    if (taskList.id != -1) {
      const task: Task = {
        id: taskList.tasks.length,
        title: title,
        desc: desc,
        date: new Date(),
        subtasks: [],
        important: false,
        done: false,
      };
      taskList.tasks.push(task);
    }
  }

  setTaskDone(task: Task | undefined, done: boolean) {
    if (task) task.done = done;
  }
  getntasks(): number {
    let ntasks: number = 0;
    for (let list of this.appData.tasklist) {
      ntasks += list.tasks.length;
    }
    return ntasks;
  }

  getAllTask(tasklist: TaskList) {
    return tasklist.tasks;
  }

  getTaskById(idTaskList: number, idTask: number): Task {
    let tasklist = this.getTaskListById(idTaskList);
    let task!: Task;
    if (tasklist) {
      task = tasklist.tasks.find((task) => task.id == idTask)!;
    }
    return task;
  }

  deleteTask(taskList:TaskList, idTask:number): boolean{
    console.log(taskList)
    let index = taskList.tasks.findIndex(task => task.id === idTask)
    console.log("delete task " + index)
    let isDeleted = false
    if (index >= 0){
      taskList.tasks.splice(index,1)
      isDeleted = true
    }
    return isDeleted
  }

  //Subtask CRUD

  createSubTask(task:Task,title:string){
    let subtask:SubTask = {
      id: task.subtasks.length,
      title: title,
      done: false
    }
    task.subtasks.push(subtask)
  }

  getSubTasks(task:Task): SubTask[]{
    return task.subtasks
  }
  getSubTaskById(task:Task, idSubTask:number): SubTask{
    let noSubTask:SubTask = {
      id: -1,
      title: '',
      done: false
    }
    return task.subtasks.find(st => st.id === idSubTask) || noSubTask
  }

  setSubTaskDone(subTask: SubTask, done: boolean) {
    subTask.done = done
  }

  deleteSubTask(task:Task, idSubTask:number): boolean{
    let index = task.subtasks.findIndex(subtask => subtask.id === idSubTask)
    let isDeleted = false
    if (index >= 0){
      task.subtasks.splice(index,1)
      isDeleted = true
    }
    return isDeleted
    
  }
}
