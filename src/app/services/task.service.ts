import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '../Task';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;  
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }
}
