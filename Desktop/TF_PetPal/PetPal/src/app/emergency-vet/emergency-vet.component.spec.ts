import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyVetComponent } from './emergency-vet.component';

describe('EmergencyVetComponent', () => {
  let component: EmergencyVetComponent;
  let fixture: ComponentFixture<EmergencyVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmergencyVetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
