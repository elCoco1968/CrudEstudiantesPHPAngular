import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  private url : string = 'http://localhost/cesde/'
  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.url);
  }

  deleteStudent(id:any){
    return this.http.get(this.url+"?borrar="+id);

  }
}
