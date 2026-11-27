import { Injectable, computed, signal } from '@angular/core';
import { Commune } from '../../../models/commune';
// Les communes favorites, partagées par toute l'application
@Injectable({ providedIn: 'root' })
export class FavoritesStore {
  private readonly items = signal<Commune[]>([]);
  readonly communes = this.items.asReadonly();
  readonly count = computed(() => this.items().length);
  isFavorite(code: string): boolean {
    return this.items().some((c) => c.code === code);
  }
  toggle(commune: Commune): void {
    if (this.isFavorite(commune.code)) {
      this.items.update((communes) => communes.filter((c) => c.code !== commune.code));
    } else {
      this.items.update((communes) => [...communes, commune]);
    }
  }
}
