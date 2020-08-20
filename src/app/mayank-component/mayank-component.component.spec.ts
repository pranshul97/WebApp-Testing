import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayankComponentComponent } from './mayank-component.component';

describe('MayankComponentComponent', () => {
  let component: MayankComponentComponent;
  let fixture: ComponentFixture<MayankComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayankComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
