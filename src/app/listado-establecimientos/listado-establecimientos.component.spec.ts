import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEstablecimientosComponent } from './listado-establecimientos.component';

describe('ListadoEstablecimientosComponent', () => {
  let component: ListadoEstablecimientosComponent;
  let fixture: ComponentFixture<ListadoEstablecimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEstablecimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEstablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
