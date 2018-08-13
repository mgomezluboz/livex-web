import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEspectaculosComponent } from './listado-espectaculos.component';

describe('ListadoEspectaculosComponent', () => {
  let component: ListadoEspectaculosComponent;
  let fixture: ComponentFixture<ListadoEspectaculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEspectaculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEspectaculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
