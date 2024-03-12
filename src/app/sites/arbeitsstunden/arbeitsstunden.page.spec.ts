import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArbeitsstundenPage } from './arbeitsstunden.page';

describe('ArbeitsstundenPage', () => {
  let component: ArbeitsstundenPage;
  let fixture: ComponentFixture<ArbeitsstundenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArbeitsstundenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
