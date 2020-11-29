import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhydonateComponent } from './whydonate.component';

describe('WhydonateComponent', () => {
  let component: WhydonateComponent;
  let fixture: ComponentFixture<WhydonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhydonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhydonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
