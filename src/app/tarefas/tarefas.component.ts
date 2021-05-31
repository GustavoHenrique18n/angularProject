import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  myTasks = []
  constructor (private tasks: PostsService) {}

  ngOnInit () {
    this.myTasks = this.tasks.getBindNotes()
  }

}
