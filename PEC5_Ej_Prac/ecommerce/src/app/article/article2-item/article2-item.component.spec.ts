import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article2ItemComponent } from './article2-item.component';

describe('Article2ItemComponent', () => {
  let component: Article2ItemComponent;
  let fixture: ComponentFixture<Article2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Article2ItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Article2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
