import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent } from './list-component/list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
{ path: 'list', component: ListComponentComponent},

{ path: '', component: LoginComponentComponent},
{ path: 'Add', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
