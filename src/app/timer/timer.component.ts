import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  timeoutId;
  seconds = 0;
  minutes = 0;
  running = false;

  constructor() {
  }

  ngOnInit(): void {}


  stop() {
    clearTimeout(this.timeoutId);
    this.running = false;
  }

  start() {
    this.timer();
    this.running = true;
  }

  clear() {
    this.seconds = 0;
    this.minutes = 0;
  }

  timer() {
    this.timeoutId = setTimeout(() => {

      this.updateTime();
      this.timer();
    }, 1000);
  }

  updateTime() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
  }

}
