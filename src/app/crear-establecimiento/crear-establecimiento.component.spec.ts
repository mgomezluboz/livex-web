import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEstablecimientoComponent } from './crear-establecimiento.component';

describe('CrearEstablecimientoComponent', () => {
  let component: CrearEstablecimientoComponent;
  let fixture: ComponentFixture<CrearEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
