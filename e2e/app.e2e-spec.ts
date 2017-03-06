import { WeytindeyPage } from './app.po';

describe('weytindey App', function() {
  let page: WeytindeyPage;

  beforeEach(() => {
    page = new WeytindeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
