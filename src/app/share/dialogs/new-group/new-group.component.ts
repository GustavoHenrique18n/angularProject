import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { GroupService } from 'src/app/group/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {

 @ViewChild('fileInput') fileInput:any;

  file:any = null
  selectedMember:boolean = false
  preview:boolean = false
  openOption:boolean=false
  users:any[] = []
  userProperty:any = {}

  searchUser:string= ""

  newGroup:any= {
    nameGroup:'',
    organizationPhoto:{},
    userGroup:[]
  }

  constructor(
    public dialogRef: MatDialogRef<NewGroupComponent>,
    private getusers: GroupService,
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
        this.userProperty = user
        this.openOption = true
      }else {
        console.log('undefined')
      }

    }
  }

  getFileProperty (file:any) {
    const reader = new FileReader()
    reader.onload = () => {
      const uri = reader.result
      this.file = uri
    };
    reader.readAsDataURL(file);
    this.preview = true
  }

  files () {
    const getFile = this.fileInput.nativeElement
    this.getFileProperty(getFile.files[0])
    this.newGroup.organizationPhoto = getFile.files[0]
  }

  confirmed (userMentioned:object) {
    this.newGroup.userGroup.push(userMentioned)
    this.selectedMember = true
    console.log(this.newGroup)
  }

  ngOnInit () {
    this.users = this.getusers.users()
    console.log(this.users)
  }

  closeDialog () {
    this.dialogRef.close();
  }
}

