import { GeoApi } from '../services/geo-api';
import { Commune } from '../../../models/commune';
import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommuneCard } from '../commune-card/commune-card';
import { FavoritesStore } from '../services/favorites-store';

@Component({
  imports: [RouterLink, FormsModule, CommuneCard],
  selector: 'app-commune-list',
  styleUrl: './commune-list.css',
  templateUrl: './commune-list.html',
})
export class CommuneList {
  protected readonly favorites = inject(FavoritesStore);
  private readonly geoApi = inject(GeoApi);
  // Le code du département, lu dans l'URL : /departements/17
  readonly code = input.required<string>();
  protected readonly communes = signal<Commune[]>([]);
  protected search = signal('');
  protected readonly filteredCommunes = computed(() => {
    const query = this.search().trim().toLowerCase();
    return this.communes().filter((commune) => commune.nom.toLowerCase().includes(query));
  });

  constructor() {
    // Charge les communes, et les recharge si le code du département change
    effect(() => {
      this.geoApi.getCommunes(this.code()).subscribe((communes) => this.communes.set(communes));
    });
  }
}
