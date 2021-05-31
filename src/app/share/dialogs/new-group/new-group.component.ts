import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/group/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {
  users:any[] = []
  filterUsers:any[] = []
  searchUser:string= ""

  newGroup:any= {
    nameGroup:'',
    userGroup:[]
  }

  constructor(
    public dialogRef: MatDialogRef<NewGroupComponent>,
    private getusers: GroupService
  ) {}

  searchedUser () {
     const valueSearched = this.searchUser
     const transformedValue = valueSearched.toLowerCase()
     return transformedValue
  }
  mentionedUser (event:any) {
    const key = event.which || event.keyCode;
    if (key == 13) {
      const returnedValue = this.searchedUser()
      const user= this.users.find(user => user.userName == returnedValue)
      if(user != undefined) {
        this.filterUsers.push(user)
      }else {
        console.log('undefined ')
      }
    }
  }
  confirmed (userMentioned:string) {
     this.newGroup.userGroup.push(userMentioned)
  }
  ngOnInit () {
    this.users = this.getusers.users()
    console.log(this.users)
  }

  closeDialog () {
    this.dialogRef.close();
  }
}


