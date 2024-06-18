import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { UserState } from '../../store/UserState';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '../../core/models/User';
import { HomeService } from "../../core/services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Select(UserState.selectUser) private user$!: Observable<User>;
  user = toSignal(this.user$);

  stats: { title: string, value: number }[] = [];
  reviews: { text: string, user: string }[] = [];
  faqs: { question: string, answer: string }[] = [];

  constructor(private homeService: HomeService) {
  }


  async ngOnInit() {

    const { data } = (await this.homeService.welcome().toPromise())!

    this.stats = [
      { title: 'Serveurs', value: data?.serverCount ?? 0 },
      { title: 'Traductions', value: data?.translationCount ?? 0 },
      { title: 'Langues supportées', value: data?.languageCount ?? 0 }
    ];

    this.reviews = [
      { text: 'Super bot de traduction, très précis et rapide !', user: 'Emanuel Macaron' },
      { text: 'Les traductions sont vraiment bonnes. Je l\'utilise tous les jours.', user: 'Alexandre Dessouter' }
    ];

    this.faqs = [
      {
        question: 'Comment inviter le bot sur mon serveur ?',
        answer: 'Utilisez le bouton "Inviter le Bot" en haut de la page.'
      },
      {
        question: 'Quelles langues sont supportées ?',
        answer: 'Le bot supporte pas moins de  de 25 langues, dont l\'anglais, le français, l\'espagnol, etc.'
      }
    ];
  }

  leaveReview() {
    alert('Fonctionnalité à venir : laisser un avis.');
  }
}
