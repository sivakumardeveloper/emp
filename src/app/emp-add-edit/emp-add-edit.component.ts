import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent  implements OnInit{

empForm!:FormGroup

constructor(private fb:FormBuilder, private empService:EmployeeService ,private dialogRef:DialogRef<EmpAddEditComponent>){
  this.empForm=this.fb.group({
    firstName:'',
    lastName:'',
    email:'',
    dob:'',
    gender:'',
    education:'',
    company:'',
    experience:'',
    package:'',
  });
}
  ngOnInit(): void {}

education:string[]=[
  'Matric',
  'Diploma',
  'Intermediate',
  'Graduate',
  'Post Graduate',
]

onFormSubmit() {
  if(this.empForm.valid){
   this.empService.addEmployee(this.empForm.value).subscribe({
    next:(val:any)=>{
      alert('Employee added Successfully');
      this.dialogRef.close();
    },
    error:(err:any)=>{
      console.error(err);
    },
   });        
  }
  }
}
