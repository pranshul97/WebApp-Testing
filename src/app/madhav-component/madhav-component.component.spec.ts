import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadhavComponentComponent } from './madhav-component.component';

describe('MadhavComponentComponent', () => {
  let component: MadhavComponentComponent;
  let fixture: ComponentFixture<MadhavComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadhavComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadhavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
