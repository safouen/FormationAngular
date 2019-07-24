import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRotationComponent } from './card-rotation.component';

describe('CardRotationComponent', () => {
  let component: CardRotationComponent;
  let fixture: ComponentFixture<CardRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
