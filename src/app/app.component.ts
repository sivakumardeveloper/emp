import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
  }
  title = 'crud';

  constructor(private dialog:MatDialog ,private empService:EmployeeService){}
     

  openAddEditEmpForm(){
    this.dialog.open(EmpAddEditComponent);
  };


  getEmployeeList(){
    this.empService.getEmployeeList().subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    });
      
      
    }
    
  
}
