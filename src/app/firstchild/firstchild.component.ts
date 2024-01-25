import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-firstchild',
  standalone: true,
  imports: [],
  templateUrl: './firstchild.component.html',
  styleUrl: './firstchild.component.css'
})
export class FirstchildComponent {

  @Output() sendToParent2 = new EventEmitter<string>();

  addItem(description: string) {
    this.sendToParent2.emit(description);
  }
}
