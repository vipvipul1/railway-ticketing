import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  name = '';
  greetingMsg = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params.name;
    this.displayGreetingMessage();
  }

  displayGreetingMessage() {
    const hr = new Date().getHours();
    if (hr < 12) {
      this.greetingMsg = 'Good morning';
    } else if (hr >= 12 && hr <= 17) {
      this.greetingMsg = 'Good Afternoon';
    } else if (hr > 17) {
      this.greetingMsg = 'Good Evening';
    }
  }

}
