import { Component } from '@angular/core';
import { FirstchildComponent } from '../firstchild/firstchild.component';
import { SecondchildComponent } from '../secondchild/secondchild.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [FirstchildComponent,SecondchildComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent {
  works:any = [
    {"id":1,"name":"html"},
    {"id":2,"name":"css"},
    {"id":3,"name":"js"},
  ];

  deletefun(id : string){
    this.works = this.works.filter((work:any) => work.id != id);
  }

  addfun(name: string) {
   let newword:any={"id":"","name":""};
   newword.id = this.works.length+1;
   newword.name = name;
   console.log(newword);
   this.works.push(newword);
   console.log(this.works);
   }


}
