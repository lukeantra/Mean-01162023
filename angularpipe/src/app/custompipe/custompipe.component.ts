import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  Fahrenheit!: number;
  celcius!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
