import { Component, OnInit } from '@angular/core';

type SelectedComponent = "register" | "get" | "update" | "remove" | "employees";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  currentComponent: SelectedComponent = "employees";

  constructor() { }

  ngOnInit(): void {
  }

}
