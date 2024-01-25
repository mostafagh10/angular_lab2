import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  standalone: true,
  imports: [],
  templateUrl: './secondchild.component.html',
  styleUrl: './secondchild.component.css'
})
export class SecondchildComponent {
  @Input() workItem:any;
  @Output() sendToSecondChild = new EventEmitter();

  deletework(id:string){
    this.sendToSecondChild.emit(id);
  }

}
