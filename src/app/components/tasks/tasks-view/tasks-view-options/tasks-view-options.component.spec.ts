import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksViewOptionsComponent } from './tasks-view-options.component';

describe('TasksViewOptionsComponent', () => {
  let component: TasksViewOptionsComponent;
  let fixture: ComponentFixture<TasksViewOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksViewOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksViewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
