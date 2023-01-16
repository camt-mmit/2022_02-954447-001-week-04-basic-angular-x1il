import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  current_time = new Date();
  user_agent = navigator.userAgent;
  languages = navigator.languages;
  cookie = navigator.cookieEnabled;
  logical = navigator.hardwareConcurrency;
  max_touch = navigator.maxTouchPoints;
}
