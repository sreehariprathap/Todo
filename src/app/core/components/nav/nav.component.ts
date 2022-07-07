import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { faPenNib,faListCheck,faCalendar,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faPenNib = faPenNib;
  faListCheck = faListCheck;
  faCalendar = faCalendar;
  faArrowRightFromBracket = faArrowRightFromBracket;
  constructor() {}

  ngOnInit(): void {}
}
