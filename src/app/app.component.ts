import { Component, OnInit } from '@angular/core';
import { GroupService } from './group/group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  groups:any[]=[]
  miniNav:boolean = true
  noPhoto:string[] = []
  loginOn:boolean = false
  constructor (
    private group: GroupService
  ) {}

  ngOnInit () {
   this.groups = this.group.groups()

     this.groups.forEach(value => {
    const groupName = value.nameGroup
    const noProfilePhoto = [...groupName]
    this.noPhoto= noProfilePhoto.slice(0,1)

  })

  }
}
