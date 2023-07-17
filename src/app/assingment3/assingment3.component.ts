import { Component } from '@angular/core';

@Component({
  selector: 'app-assingment3',
  templateUrl: './assingment3.component.html',
  styleUrls: ['./assingment3.component.css'],
})
export class Assingment3Component {
  isShowDetails = false;
  logTiming = [];

  onClickShowDetails() {
    this.isShowDetails = !this.isShowDetails;
    let time = new Date();
    this.logTiming.push(time.toISOString());
  }
}
