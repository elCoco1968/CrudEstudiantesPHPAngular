import { Component, OnInit } from '@angular/core';
import { studentModel } from 'src/app/services/students-model';
import { StudentsService } from 'src/app/services/students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  listsStudents : any;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
    console.log(this.listsStudents)
    
  }

  getStudents(){
    this.studentsService.getStudents()
        .subscribe( data => {
          this.listsStudents = data;
          console.log(data)

        }
        )
  }

  delete(id: any,iControl: any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentsService.deleteStudent(id)
        .subscribe( (resp) =>
        this.listsStudents.splice(iControl,1)
        );
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  }



}
