import { Injectable } from '@angular/core';
import { taskModel } from '../taskModel';
import { taskList } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask () : taskModel[] {
     return taskList;
  }

   
  deletTask(id : number) {
    var filtered = taskList.filter((x, i) => {
      return x = id;
    })
    return filtered;
  }
}
