import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSplitPane, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton],
})
export class HomePage {
  constructor() {
  }

}