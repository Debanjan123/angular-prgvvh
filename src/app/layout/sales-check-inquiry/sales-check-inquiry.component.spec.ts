import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCheckInquiryComponent } from './sales-check-inquiry.component';

describe('BlankPageComponent', () => {
    let component: SalesCheckInquiryComponent;
    let fixture: ComponentFixture<SalesCheckInquiryComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [SalesCheckInquiryComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SalesCheckInquiryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
