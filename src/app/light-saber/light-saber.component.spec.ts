import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSaberComponent } from './light-saber.component';

describe('LightSaberComponent', () => {
  let component: LightSaberComponent;
  let fixture: ComponentFixture<LightSaberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSaberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
