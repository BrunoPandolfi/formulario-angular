import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReativoComponent } from './formulario-reativo.component';

describe('FormularioReativoComponent', () => {
  let component: FormularioReativoComponent;
  let fixture: ComponentFixture<FormularioReativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioReativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
