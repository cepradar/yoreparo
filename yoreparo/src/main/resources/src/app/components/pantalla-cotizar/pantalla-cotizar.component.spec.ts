import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCotizarComponent } from './pantalla-cotizar.component';

describe('PantallaCotizarComponent', () => {
  let component: PantallaCotizarComponent;
  let fixture: ComponentFixture<PantallaCotizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaCotizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaCotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
