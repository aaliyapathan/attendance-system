import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'list', component: ListComponentComponent},
  // { path: 'login', component: LoginComponentComponent},
  { path: '', component: LoginComponentComponent},
  { path: 'Add', component: AddStudentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ListComponentComponent,
    AddStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
