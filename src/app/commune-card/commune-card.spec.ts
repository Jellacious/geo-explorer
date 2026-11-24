import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommuneCard } from './commune-card';

describe('CommuneCard', () => {
  let component: CommuneCard;
  let fixture: ComponentFixture<CommuneCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommuneCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CommuneCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
