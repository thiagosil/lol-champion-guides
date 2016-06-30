export class LolChampionGuidesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root section.hero-section div.containr h1')).getText();
  }
}
