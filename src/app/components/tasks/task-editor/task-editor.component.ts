import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/data.model';
import { CheckboxFieldComponent } from '../../library/checkbox-field/checkbox-field.component';
import { TaskService } from '../../../services/task.service';
import { NgFor, NgIf } from '@angular/common';
import { IconComponent } from '../../library/icon/icon.component';
import { CheckBoxFieldOuput } from '../../library/models/output.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItemComponent } from '../../library/menu-item/menu-item.component';
@Component({
  selector: 'app-task-editor',
  imports: [
    CheckboxFieldComponent,
    NgIf,
    NgFor,
    IconComponent,
    ReactiveFormsModule,
    MenuItemComponent,
  ],
  templateUrl: './task-editor.component.html',
  styleUrl: './task-editor.component.scss',
})
export class TaskEditorComponent {
  formGroup = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators:[Validators.required, Validators.minLength(3)] }),
    date: new FormControl(new Date(), { nonNullable: true}),
    desc: new FormControl('', { nonNullable: true }),
  });
  @Input() idTaskList!: number;
  @Input() isEdit = false;
  @Input() isSubTaskInput= false;
  @Input() task!: Task;
  @Output() closeEditorEvent = new EventEmitter();
  newSubTaskTitle:string = "" 

  constructor(private readonly taskService: TaskService) {}

  onCloseEditor() {
    this.closeEditorEvent.emit();
  }
  handleTaskCfOuput(event: CheckBoxFieldOuput) {
    this.taskService.setTaskDone(
      this.taskService.getTaskById(
        this.taskService.getTaskClick().idList,
        this.taskService.getTaskClick().idTask
      ),
      event.isChecked
    );
  }
  handleSubTaskCfOutput(event: CheckBoxFieldOuput){
    let subTask = this.taskService.getSubTaskById(this.task,event.idCf);
    this.taskService.setSubTaskDone(subTask,event.isChecked)
  }
  
  enableSubTaskInput() {
    this.isSubTaskInput = true;
  }

  disableSubTaskInput() {
    this.isSubTaskInput = false;
  }

  handleAddSubTask(){
    this.enableSubTaskInput()
  }
  handleEnterKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.disableSubTaskInput();
      this.taskService.createSubTask(this.task,this.newSubTaskTitle);
    }
    if (event.key === 'Escape') {
      this.disableSubTaskInput();
    }
  }

  handleTaskDeleteButton(){
    this.taskService.deleteTask(this.taskService.getTaskListById(this.idTaskList),this.task.id);
    this.onCloseEditor()
  }

  handleSubTaskDelete(event:number){
    this.taskService.deleteSubTask(this.task,event);
  }

  inputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.newSubTaskTitle = target.value;
  }

  onFormSubmit() {
    this.taskService.createTask(
      this.taskService.getTaskListById(this.idTaskList),
      this.formGroup.getRawValue().title,
      this.formGroup.getRawValue().date,
      this.formGroup.getRawValue().desc
    );
    this.onCloseEditor();    
  }
}
