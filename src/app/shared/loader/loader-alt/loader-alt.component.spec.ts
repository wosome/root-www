import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderAltComponent } from './loader-alt.component';

describe('LoaderAltComponent', () => {
  let component: LoaderAltComponent;
  let fixture: ComponentFixture<LoaderAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
