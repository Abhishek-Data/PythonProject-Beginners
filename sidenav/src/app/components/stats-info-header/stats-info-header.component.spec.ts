import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsInfoHeaderComponent } from './stats-info-header.component';

describe('StatsInfoHeaderComponent', () => {
  let component: StatsInfoHeaderComponent;
  let fixture: ComponentFixture<StatsInfoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsInfoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
