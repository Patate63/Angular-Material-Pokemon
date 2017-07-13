import { ThemingAngular4V3Page } from './app.po';

describe('theming-angular4-v3 App', () => {
  let page: ThemingAngular4V3Page;

  beforeEach(() => {
    page = new ThemingAngular4V3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
