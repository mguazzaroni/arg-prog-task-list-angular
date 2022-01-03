import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos los modulos de formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Importamos el modulo para manejar peticiones http
import {HttpClientModule} from '@angular/common/http';
// import { RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import {TasksItemComponent} from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';

// const appRoutes: Routes = [
//   { path: '', component: TasksComponent },
//   { path: '/about', component: AboutComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
