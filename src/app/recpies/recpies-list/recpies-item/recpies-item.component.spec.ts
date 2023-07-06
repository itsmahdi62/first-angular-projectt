import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpiesItemComponent } from './recpies-item.component';

describe('RecpiesItemComponent', () => {
  let component: RecpiesItemComponent;
  let fixture: ComponentFixture<RecpiesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecpiesItemComponent]
    });
    fixture = TestBed.createComponent(RecpiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
