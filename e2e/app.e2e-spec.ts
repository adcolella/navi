import { UntitledPage } from './app.po';

describe('untitled App', () => {
  let page: UntitledPage;

  beforeEach(() => {
    page = new UntitledPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
