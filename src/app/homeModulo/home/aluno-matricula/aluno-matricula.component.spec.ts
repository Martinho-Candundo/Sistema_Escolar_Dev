import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMatriculaComponent } from './aluno-matricula.component';

describe('AlunoMatriculaComponent', () => {
  let component: AlunoMatriculaComponent;
  let fixture: ComponentFixture<AlunoMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoMatriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
