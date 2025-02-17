import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-header',
  imports: [],
  templateUrl: './tasks-header.component.html',
  styleUrl: './tasks-header.component.scss'
})
export class TaskHeaderComponent {
  @Input() title:string = '';
  @Input() ntasks:number = 0;
  
}
