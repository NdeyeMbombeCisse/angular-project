import { Component } from '@angular/core';
import { TacheComponent } from './tache/tache.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TacheComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
