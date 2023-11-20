import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinaAlunoComponent } from './propina-aluno.component';

describe('PropinaAlunoComponent', () => {
  let component: PropinaAlunoComponent;
  let fixture: ComponentFixture<PropinaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropinaAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
