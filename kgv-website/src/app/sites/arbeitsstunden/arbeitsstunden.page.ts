import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-arbeitsstunden',
  templateUrl: './arbeitsstunden.page.html',
  styleUrls: ['./arbeitsstunden.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ArbeitsstundenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
