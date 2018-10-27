import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermamentComponent } from './permament.component';

describe('PermamentComponent', () => {
  let component: PermamentComponent;
  let fixture: ComponentFixture<PermamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
