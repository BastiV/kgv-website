import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonTitle, IonContent, IonSplitPane, IonMenu, IonButtons, IonMenuButton, IonNavLink, IonButton, IonList, IonItem, IonHeader } from '@ionic/angular/standalone';
import { Sites } from './sites/Sites';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonHeader,
    IonApp,
    IonRouterOutlet,
    IonList,
    IonNavLink,
    IonSplitPane,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonItem
  ],
})
export class AppComponent {

  public readonly sites: Sites[] =
    [
      { name: 'Home', url: '/home' },
      { name: 'Ankündigungen', url: 'ankuendigungen' },
      { name: 'Arbeitsstunden 2024', url: 'arbeitsstunden' },
    ];

  constructor() { }
}
