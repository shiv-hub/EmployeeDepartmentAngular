import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  hireDateDetails = new FormGroup({
    hireDate: new FormControl("hireDate"),
  });

  constructor() {}

  ngOnInit(): void {}
}
