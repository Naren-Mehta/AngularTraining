import { NppRoutingModule } from './npp-routing.module';

describe('NppRoutingModule', () => {
  let nppRoutingModule: NppRoutingModule;

  beforeEach(() => {
    nppRoutingModule = new NppRoutingModule();
  });

  it('should create an instance', () => {
    expect(nppRoutingModule).toBeTruthy();
  });
});
