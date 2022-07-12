import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class Datepicker implements OnInit {
  selected!: Date | null;

  constructor() { }

  ngOnInit(): void {
  }

}
