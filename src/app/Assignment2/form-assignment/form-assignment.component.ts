import { Component } from '@angular/core';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css'],
})
export class FormAssignmentComponent {
  username = '';
  isEmpty = true;

  onCheckUsername() {
    if (this.username.length != 0) {
      this.isEmpty = false;
    }
    return this.isEmpty;
  }
  onReset() {
    this.username = '';
    this.isEmpty = true;
  }
}
