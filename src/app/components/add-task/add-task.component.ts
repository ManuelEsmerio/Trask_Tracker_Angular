import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  toggle:boolean = false;

  text:string = '';
  day:string = '';
  reminder:boolean = false;

  @Output() addTask:EventEmitter<Task> = new EventEmitter();

  constructor(private uiService:UiService) {
    this.uiService.onToggle().subscribe(value => this.toggle = value);
  }

  ngOnInit(): void {
  }

  handleSubmit(){
    if (this.text.trim().length > 0) {
      const newTask:Task = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.addTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }else{
      alert('Please add a task!');
      return;
    }
    console.log("submit")
  }

}
