import { Component } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {

  data:any =  {
    id: 0,
    folderName:"",
    color:""
  }
  constructor (
    public dialogRef: MatDialogRef<FolderComponent>
  ) {}

    closeDialog () {
    this.dialogRef.close();
  }

}
