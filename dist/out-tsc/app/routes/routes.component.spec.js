import { async, TestBed } from '@angular/core/testing';
import { RoutesComponent } from './routes.component';
describe('RoutesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RoutesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RoutesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/ilkkamtk/Documents/gitProjects/mobileWebApps/wbma_examples/Week3t1/src/app/routes/routes.component.spec.js.map