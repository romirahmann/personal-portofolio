import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPortoComponent } from './gallery-porto.component';

describe('GalleryPortoComponent', () => {
  let component: GalleryPortoComponent;
  let fixture: ComponentFixture<GalleryPortoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPortoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPortoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
