import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrogueriaComponent } from './drogueria.component';

describe('DrogueriaComponent', () => {
  let component: DrogueriaComponent;
  let fixture: ComponentFixture<DrogueriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrogueriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrogueriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
