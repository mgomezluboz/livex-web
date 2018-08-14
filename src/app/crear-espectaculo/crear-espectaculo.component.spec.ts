import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEspectaculoComponent } from './crear-espectaculo.component';

describe('CrearEspectaculoComponent', () => {
  let component: CrearEspectaculoComponent;
  let fixture: ComponentFixture<CrearEspectaculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEspectaculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEspectaculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
