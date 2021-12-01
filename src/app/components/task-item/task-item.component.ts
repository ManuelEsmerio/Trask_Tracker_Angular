import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!:Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onReminderTask:EventEmitter<Task> = new EventEmitter();

  faWindowClose = faWindowClose;

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(task:Task){
    console.log("Click delete on task item");
    this.onDeleteTask.emit(task);
  }

  handleReminder(task:Task){
    console.log("dblClick");
    this.onReminderTask.emit(task);
  }

}
