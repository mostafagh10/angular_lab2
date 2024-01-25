import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirsttaskComponent } from './firsttask/firsttask.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirsttaskComponent,WrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondlab';
}
