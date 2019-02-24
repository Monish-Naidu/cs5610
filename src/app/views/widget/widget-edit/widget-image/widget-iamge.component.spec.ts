import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetIamgeComponent } from './widget-iamge.component';

describe('WidgetIamgeComponent', () => {
  let component: WidgetIamgeComponent;
  let fixture: ComponentFixture<WidgetIamgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetIamgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetIamgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
