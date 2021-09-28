import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationButtonComponent } from './classification-button.component';

describe('ClassificationButtonComponent', () => {
  let component: ClassificationButtonComponent;
  let fixture: ComponentFixture<ClassificationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
