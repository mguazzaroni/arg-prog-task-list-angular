import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks'; 


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';
  constructor(
    private http: HttpClient
  ) { }

  getTasks() : Observable<Task[]>{
    //El get nos va a devolver la lista de tareas guardada en db.json que ahora manejamos por metodos http
    return this.http.get<Task[]>(this.apiUrl);
  }
}
