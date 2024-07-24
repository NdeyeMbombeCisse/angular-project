import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Tache {
  titre: string;
  description: string;
  statut: boolean;
}

@Component({
  selector: 'app-tache',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  taches: Tache[] = [];

  addTache(titre: string, description: string): void {
    if(titre.trim() &&description.trim()){
      this.taches.push({
        titre,
        description,
        statut: false,
      });
      
    }else{
      alert('le titre et la descripion sont vides')
    }
   
  }
  ngOnInit(): void {
  }


  onSubmit(form: NgForm): void {
    console.log(form);
  }

  confirmer(index:number)  {
  
  this.taches[index].statut=true;
 
   
 

  }
  }
