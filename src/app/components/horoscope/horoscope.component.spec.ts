import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroscopeComponent } from './horoscope.component';

describe('HoroscopeComponent', () => {
  let component: HoroscopeComponent;
  let fixture: ComponentFixture<HoroscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoroscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
