import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInNavComponent } from './log-in-nav.component';

describe('LogInNavComponent', () => {
  let component: LogInNavComponent;
  let fixture: ComponentFixture<LogInNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
