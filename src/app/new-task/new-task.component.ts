import { Component, inject } from '@angular/core';
import { TaskService } from '../Services/task.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  taskService: TaskService = inject(TaskService)
 
createTask: string = ''
onClick() {
  this.taskService.OnCreateEvent(this.createTask)
}
}
