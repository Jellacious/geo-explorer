import { Component, input } from '@angular/core';
import { Commune } from '../../../models/commune';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-commune-card',
  styleUrl: './commune-card.css',
  templateUrl: './commune-card.html',
})
export class CommuneCard {
  readonly commune = input.required<Commune>();
}
