import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  constructor() {}

  ngOnInit(): void {}
}
