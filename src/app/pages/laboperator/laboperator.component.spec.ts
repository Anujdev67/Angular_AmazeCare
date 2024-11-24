import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboperatorComponent } from './laboperator.component';

describe('LaboperatorComponent', () => {
  let component: LaboperatorComponent;
  let fixture: ComponentFixture<LaboperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
