import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksViewBoardComponent } from './tasks-view-board.component';

describe('TasksViewBoardComponent', () => {
  let component: TasksViewBoardComponent;
  let fixture: ComponentFixture<TasksViewBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksViewBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksViewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
