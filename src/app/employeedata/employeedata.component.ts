import { Component, OnInit } from "@angular/core";
import { Employee } from "../model/employee.model";
import { EmployeeService } from "../services/employee.service";
import * as moment from "moment";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employeedata",
  templateUrl: "./employeedata.component.html",
  styleUrls: ["./employeedata.component.css"],
})
export class EmployeedataComponent implements OnInit {
  departments = [
    "Manager",
    "Asst. Manager",
    "Sr. Developer",
    "CEO",
    "Director",
  ];

  employee: Employee = {
    id: 0,
    age: 0,
    department: "",
    firstName: "",
    hireDate: "",
    lastName: "",
  };
  constructor(
    private _services: EmployeeService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  display: any;
  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get("id");
    this._services
      .getEmployeeById(id)
      .subscribe((data) => (this.employee = data));
    console.log(this.employee);
  }
  saveEmployee() {
    let newhireDate = moment(this.employee.hireDate).format("YYYY-MM-DD");
    this.employee.hireDate = newhireDate;
    console.log(this.employee);

    this._services
      .addEmployee(this.employee)
      .subscribe((data) => (this.display = data));
    // console.log(this.display);
    alert("One Employee Added ...!");

    this.router.navigate([""]);
  }

  back() {
    this.router.navigate([""]);
  }
}
