import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUser } from './store/UserState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUser());
  }
}
