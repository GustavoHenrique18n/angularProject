import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GroupService } from './group.service';

import config from '../share/dialogs/dialog-config'
import { NewGroupComponent } from '../share/dialogs/new-group/new-group.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groups:any[] =[]
  newgroup = {}

  constructor (
    private group: GroupService,
    public dialog: MatDialog
  ) {}

  addGroup () {
    const dialogRef = this.dialog.open(NewGroupComponent , config.configGroupModal())

    dialogRef.afterClosed().subscribe(result  => {
    if(result != undefined){
      console.log(result)
      this.groups = this.group.groups()
      this.groups.push(result)
    }
   });
  }
  ngOnInit () {}
}
