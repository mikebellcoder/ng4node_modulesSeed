import { WmsAppsPage } from './app.po';

describe('wms-apps App', () => {
  let page: WmsAppsPage;

  beforeEach(() => {
    page = new WmsAppsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
