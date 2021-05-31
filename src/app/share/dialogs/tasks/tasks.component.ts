import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts/posts.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:any[]= []
  constructor(private getTasks: PostsService) { }

  ngOnInit () {
    this.tasks =this.getTasks.getFolderContent()
    console.log(this.tasks)
  }

}
