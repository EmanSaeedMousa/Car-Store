import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producs',
  templateUrl: './producs.component.html',
  styleUrls: ['./producs.component.scss']
})
export class ProducsComponent implements OnInit {
  constructor(private router: Router  ) { }

  ngOnInit(): void {
  }



}
