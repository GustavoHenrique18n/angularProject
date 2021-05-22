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
  // comments:any[]
  showAlert = false
  clickOn = true
  title = true
  posts:any[]

  positionOptions:TooltipPosition[] = ['above'];
  position = this.positionOptions[0]

  constructor (private GetallPosts: AppService) {
    this.posts= []
    // this.comments= []
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
      // this.comments = await this.GetallPosts.getComments()
  }
}
