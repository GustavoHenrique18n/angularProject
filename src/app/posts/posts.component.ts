import { Component, OnInit  } from '@angular/core';
import { PostsService } from './posts.service'
import { MatDialog } from '@angular/material/dialog';
import { FolderComponent } from '../share/dialogs/folder/folder.component'
import { TasksComponent } from '../share/dialogs/tasks/tasks.component'
import  config from '../share/dialogs/dialog-config'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  color:any
  folders:any[]= []

  constructor (
    private getPublicFolders: PostsService,
    public dialog: MatDialog
  ) {}

   folderDialog () {
    const dialogRef= this.dialog.open(FolderComponent , config.configFolderModal())

    dialogRef.afterClosed().subscribe(result  => {
      if(result != undefined){
        console.log(result)
        this.folders.push(result)
      }
    });
   }

   showTasks (folder:number) {
     console.log(folder)
     this.getPublicFolders.folderContent(folder)
     this.dialog.open(TasksComponent , config.configTasksModal())
   }
   ngOnInit () {
    this.folders = this.getPublicFolders.getPublicFolder()
  }
}
