import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  faFeather,
  faListCheck,
  faCalendar,
  faArrowRightFromBracket,
  faGear,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faFeather = faFeather;
  faListCheck = faListCheck;
  faCalendar = faCalendar;
  faArrowRightFromBracket = faArrowRightFromBracket;
  faGear = faGear;
  faPlus = faPlus;

  isLoggedin = false;
  constructor() {}

  ngOnInit(): void {
    if(localStorage.getItem('isLoggedin')){
      this.isLoggedin = true;
    }
  }
}
