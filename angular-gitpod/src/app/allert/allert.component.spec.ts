import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllertComponent } from './allert.component';

describe('AllertComponent', () => {
  let component: AllertComponent;
  let fixture: ComponentFixture<AllertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
