import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksViewCalendarComponent } from './tasks-view-calendar.component';

describe('TasksViewCalendarComponent', () => {
  let component: TasksViewCalendarComponent;
  let fixture: ComponentFixture<TasksViewCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksViewCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksViewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
