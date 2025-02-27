import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditorComponent } from './task-editor.component';

describe('TaskEditorComponent', () => {
  let component: TaskEditorComponent;
  let fixture: ComponentFixture<TaskEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
