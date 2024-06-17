import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { UserState } from '../../store/UserState';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '../../core/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Select(UserState.selectUser) private user$!: Observable<User>;
  user = toSignal(this.user$);

  stats: { title: string, value: number }[] = [];
  graphData1: any = {};
  graphData2: any = {};
  reviews: { text: string, user: string }[] = [];
  faqs: { question: string, answer: string }[] = [];

  ngOnInit() {
    this.stats = [
      { title: 'Serveurs', value: 1234 },
      { title: 'Traductions', value: 56789 },
      { title: 'Langues supportées', value: 34 }
    ];

    this.reviews = [
      { text: 'Super bot de traduction, très précis et rapide !', user: 'Emanuel Macaron' },
      { text: 'Les traductions sont vraiment bonnes. Je l\'utilise tous les jours.', user: 'Alexandre Dessouter' }
    ];

    this.faqs = [
      { question: 'Comment inviter le bot sur mon serveur ?', answer: 'Utilisez le bouton "Inviter le Bot" en haut de la page.' },
      { question: 'Quelles langues sont supportées ?', answer: 'Le bot supporte plus de 30 langues, dont l\'anglais, le français, l\'espagnol, etc.' }
    ];
  }

  leaveReview() {
    alert('Fonctionnalité à venir : laisser un avis.');
  }
}
