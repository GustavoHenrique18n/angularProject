import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';

import { MaterialModule } from './share/material/material.module'
import { FormsModule } from '@angular/forms';
import { TarefasComponent } from './tarefas/tarefas.component';
import { FolderComponent } from './share/dialogs/folder/folder.component';
import { TasksComponent } from './share/dialogs/tasks/tasks.component';
import { GroupComponent } from './group/group.component';
import { NewGroupComponent } from './share/dialogs/new-group/new-group.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    TarefasComponent,
    FolderComponent,
    TasksComponent,
    GroupComponent,
    NewGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
