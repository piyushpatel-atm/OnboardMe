import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOnboardFormComponent } from './pre-onboard-form.component';

describe('PreOnboardFormComponent', () => {
  let component: PreOnboardFormComponent;
  let fixture: ComponentFixture<PreOnboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreOnboardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOnboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
