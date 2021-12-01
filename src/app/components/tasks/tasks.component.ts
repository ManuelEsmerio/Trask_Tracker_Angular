import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(private serviceTask:TaskService) { }

  ngOnInit(): void {
    this.serviceTask.getTasks()
    .subscribe(resp => {
      this.tasks = resp;
    })
  }

  onDelete(task:Task){
    this.serviceTask.deleteTask(task)
    .subscribe(() => this.tasks = this.tasks.filter(item => item.id !== task.id));
  }

  onReminder(task:Task){
    task.reminder = !task.reminder;
    this.serviceTask.reminderTask(task)
    .subscribe()
  }

  onSaveTask(task:Task){
    // task.id = this.tasks.length + 1;
    this.serviceTask.saveTask(task)
    .subscribe(resp => {
        this.tasks.push(resp);
    });
  }

}
