import { Component, OnInit } from '@angular/core';

@Component({
  // the component's CSS element selector
  selector: 'app-heroes',
  // the location of the component's template file.
  templateUrl: './heroes.component.html',
  // the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero = 'Windstorm';
  constructor() {}

  ngOnInit(): void {}
}
