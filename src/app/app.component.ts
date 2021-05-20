import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'

import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text:string = ""
  searcherror:string = ""
  post:string=""
  showAlert = false
  title = true
  posts:any[]

  positionOptions:TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = this.positionOptions[2]

  constructor (private GetallPosts: AppService) {
    this.posts= []
  }

  confirmation (event:any) {
    this.text = event.email
  }
  searchPost () {
     this.posts.find(item =>{
      if(item.title == this.post){
        return item
      }else{
        this.searcherror= `nenhum post com esse titulo encontrado: ${this.post}`
      }
    })
  }
   async ngOnInit () {
      this.posts = await this.GetallPosts.getAllPosts()
  }
}
