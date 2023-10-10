import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPortoComponent } from './view-porto.component';

describe('ViewPortoComponent', () => {
  let component: ViewPortoComponent;
  let fixture: ComponentFixture<ViewPortoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPortoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
