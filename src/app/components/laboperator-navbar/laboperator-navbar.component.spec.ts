import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboperatorNavbarComponent } from './laboperator-navbar.component';

describe('LaboperatorNavbarComponent', () => {
  let component: LaboperatorNavbarComponent;
  let fixture: ComponentFixture<LaboperatorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboperatorNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboperatorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
