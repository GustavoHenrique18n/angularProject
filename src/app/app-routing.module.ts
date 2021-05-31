import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'posts', component: PostsComponent},
  {path:'tarefas', component: TarefasComponent},
  {path:'grupo', component: GroupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
