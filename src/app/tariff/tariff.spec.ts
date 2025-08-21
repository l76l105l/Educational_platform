import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tariff } from './tariff';

describe('Tariff', () => {
  let component: Tariff;
  let fixture: ComponentFixture<Tariff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tariff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tariff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
