import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroImagemComponent } from './quadro-imagem.component';

describe('QuadroImagemComponent', () => {
  let component: QuadroImagemComponent;
  let fixture: ComponentFixture<QuadroImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadroImagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadroImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
