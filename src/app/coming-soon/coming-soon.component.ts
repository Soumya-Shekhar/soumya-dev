import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {
  headline = signal('Brewing Something Legendary!');
  subheadline = signal('Awesomeness Under Construction!');
  contactEmail = signal('soumya.shekhar@soumyadev.in');
}
