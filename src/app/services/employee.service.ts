import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Employee } from "../model/employee.model";
import { Department } from "../model/department.model";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private _urlallemployees = "http://localhost:8081/employees";
  private _urldepartment = "http://localhost:8081/department";
  private _forTodaysHired = "http://localhost:8081/employee/today";
  private _ROOT_URL = "http://localhost:8081/employee";
  constructor(private _http: HttpClient) {}

  getDetails(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this._urlallemployees);
  }

  getDepartments(): Observable<Department[]> {
    return this._http.get<Department[]>(this._urldepartment);
  }

  getTodayHiredEmployee(): Observable<Employee[]> {
    return this._http.get<Employee[]>(this._forTodaysHired);
  }

  getParticularDateEmployee(hireDate): Observable<Employee[]> {
    let params = new HttpParams().set("hireDate", hireDate);
    return this._http.get<Employee[]>(this._ROOT_URL + "/date", { params });
  }

  getEmployeeBetweenDate(hireDate1, hireDate2): Observable<Employee[]> {
    let params = new HttpParams()
      .set("hireDate1", hireDate1)
      .set("hireDate2", hireDate2);
    return this._http.get<Employee[]>(this._ROOT_URL + "/betweendate", {
      params,
    });
  }

  getEmployeeBeforeDate(hireDate): Observable<Employee[]> {
    let params = new HttpParams().set("hireDate", hireDate);
    return this._http.get<Employee[]>(this._ROOT_URL + "/beforedate", {
      params,
    });
  }

  getEmployeeAfterDate(hireDate): Observable<Employee[]> {
    let params = new HttpParams().set("hireDate", hireDate);
    return this._http.get<Employee[]>(this._ROOT_URL + "/afterdate", {
      params,
    });
  }
}
