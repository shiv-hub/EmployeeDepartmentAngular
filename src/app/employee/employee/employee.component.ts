import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/model/employee.model";
import { EmployeeService } from "src/app/services/employee.service";
import { NgForm } from "@angular/forms";
import { from } from "rxjs";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "firstName",
    "lastName",
    "age",
    "hireDate",
    "department",
    "Actions",
  ];

  // public studentdetails = [];
  dataSource: Employee[] = [];
  constructor(
    private _employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._employeeService
      .getDetails()
      .subscribe((data) => (this.dataSource = data));
    console.log(this.dataSource);
  }

  todaysEmployee() {
    console.log("Your Function Clicked..!");
    this._employeeService
      .getTodayHiredEmployee()
      .subscribe((data) => (this.dataSource = data));
    console.log(this.dataSource);
  }

  onParticularDate(form: NgForm) {
    let myDate = moment(form.value.hireDate).format("YYYY-MM-DD");
    console.log(myDate);
    this._employeeService
      .getParticularDateEmployee(myDate)
      .subscribe((data) => (this.dataSource = data));
  }

  onBetweenDate(form: NgForm) {
    let hireDate1 = moment(form.value.hireDate1).format("YYYY-MM-DD");
    let hireDate2 = moment(form.value.hireDate2).format("YYYY-MM-DD");
    console.log(hireDate1);
    console.log(hireDate2);

    this._employeeService
      .getEmployeeBetweenDate(hireDate1, hireDate2)
      .subscribe((data) => (this.dataSource = data));
  }

  onBeforeGivenDate(form: NgForm) {
    let hireDate = moment(form.value.hireDate3).format("YYYY-MM-DD");
    console.log(hireDate);
    this._employeeService
      .getEmployeeBeforeDate(hireDate)
      .subscribe((data) => (this.dataSource = data));
  }

  onAfterGivenDate(form: NgForm) {
    let hireDate = moment(form.value.hireDate4).format("YYYY-MM-DD");
    console.log(hireDate);
    this._employeeService
      .getEmployeeAfterDate(hireDate)
      .subscribe((data) => (this.dataSource = data));
  }

  deleteEmployee(id) {
    let msg;
    this._employeeService.deleteEmployee(id).subscribe((data) => (msg = data));
    alert(msg);
    this.router.navigate([""]);
  }
}
