import { MapifulClonePage } from './app.po';

describe('mapiful-clone App', () => {
  let page: MapifulClonePage;

  beforeEach(() => {
    page = new MapifulClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
