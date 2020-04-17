import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.css"],
})
export class DepartmentComponent implements OnInit {
  displayedColumns: string[] = ["id", "deptName", "noe"];
  dataSource = [];
  constructor(private _departmentService: EmployeeService) {}

  ngOnInit(): void {
    this._departmentService
      .getDepartments()
      .subscribe((data) => (this.dataSource = data));
    console.log(this.dataSource);
  }
}
