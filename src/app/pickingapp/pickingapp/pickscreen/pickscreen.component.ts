import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/shared/auth.service";

@Component({
  selector: 'app-pickscreen',
  templateUrl: './pickscreen.component.html',
  styleUrls: ['./pickscreen.component.css']
})
export class PickscreenComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit() {}

}
