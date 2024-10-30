import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreservesComponent } from './showreserves.component';

describe('ShowreservesComponent', () => {
  let component: ShowreservesComponent;
  let fixture: ComponentFixture<ShowreservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowreservesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowreservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
