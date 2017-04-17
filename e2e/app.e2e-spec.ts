import { AngAnimationTrialPage } from './app.po';

describe('ang-animation-trial App', () => {
  let page: AngAnimationTrialPage;

  beforeEach(() => {
    page = new AngAnimationTrialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
