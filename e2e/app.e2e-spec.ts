import { LolChampionGuidesPage } from './app.po';

describe('lol-champion-guides App', function() {
  let page: LolChampionGuidesPage;

  beforeEach(() => {
    page = new LolChampionGuidesPage();
  });

  it('should display the a welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lol Guide Index');
  });
});
