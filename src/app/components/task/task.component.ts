import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { taskModel } from 'src/app/taskModel';
// import { taskList } from 'src/app/tasks';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  tasks! : taskModel [] 

  ngOnInit(): void {
    this.tasks = this.taskService.getTask()
    console.log(this.tasks);
    
  }

}
