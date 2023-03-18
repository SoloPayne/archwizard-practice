import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWizardComponent } from './first-wizard.component';

describe('FirstWizardComponent', () => {
  let component: FirstWizardComponent;
  let fixture: ComponentFixture<FirstWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
