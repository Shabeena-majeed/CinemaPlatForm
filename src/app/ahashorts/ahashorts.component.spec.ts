import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhashortsComponent } from './ahashorts.component';

describe('AhashortsComponent', () => {
  let component: AhashortsComponent;
  let fixture: ComponentFixture<AhashortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhashortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhashortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
