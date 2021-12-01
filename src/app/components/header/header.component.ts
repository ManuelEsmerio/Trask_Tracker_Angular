import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Task Tracker';
  toggleAdd:boolean = false;
  // subscription!: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.uiService.onToggle().subscribe(value => this.toggleAdd = value);
  }

  ngOnInit(): void {
  }

  toggleClick(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

}
