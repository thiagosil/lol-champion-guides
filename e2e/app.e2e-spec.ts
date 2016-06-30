import { LolChampionGuidesPage } from './app.po';

describe('lol-champion-guides App', function() {
  let page: LolChampionGuidesPage;

  beforeEach(() => {
    page = new LolChampionGuidesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
