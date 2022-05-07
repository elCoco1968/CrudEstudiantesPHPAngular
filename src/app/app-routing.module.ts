import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggStudentComponent } from './components/agg-student/agg-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list-students'},
  {path: 'list-students', component: ListStudentComponent},
  {path: 'agg-students', component: AggStudentComponent},
  {path: 'edit-students/:id', component: EditStudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
