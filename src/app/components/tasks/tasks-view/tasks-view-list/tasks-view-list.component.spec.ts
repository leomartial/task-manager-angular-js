import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksViewListComponent } from './tasks-view-list.component';

describe('TasksViewListComponent', () => {
  let component: TasksViewListComponent;
  let fixture: ComponentFixture<TasksViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksViewListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
