import { async, TestBed } from '@angular/core/testing';
import { SetupComponent } from './setup.component';
describe('SetupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SetupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SetupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ilkkamtk/Documents/gitProjects/mobileWebApps/wbma_examples/Week3t1/src/app/setup/setup.component.spec.js.map