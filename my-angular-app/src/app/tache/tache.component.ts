import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tache',
  standalone: true,
  imports: [],
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent implements OnInit {
  title!:string;
  description!:string;
  imgurl!:string;
  ngOnInit(): void {
    this.title ='bonjour';
    this.description ='hello world je suis Ndeye Mbombe Cisse et je suis tres gentille ma photo se trouve juste en bas .merci de clicker sur le bouton d\'en afin de voter pour moi merci d\'avance!';
    this.imgurl ='https://i.pinimg.com/564x/ea/78/c3/ea78c38ecd0d816a0b67c28bc7cbca3c.jpg'
  }

  clicler(){
    alert('machallah Mbombe')
  }

}
