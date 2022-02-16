import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { taskModel } from 'src/app/taskModel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()  task! : taskModel
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(id : number) {
    this.taskService.deletTask(id)
    
  }

}
