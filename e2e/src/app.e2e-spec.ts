import { AppPage } from './app.po';
import { browser, logging, Key } from 'protractor';
import { $, $$} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be favorite city', async () => {
    page.navigateTo();
    await $('#state').click();
    await $('#PR').click();
    await $('#city').sendKeys(Key.chord(Key.CONTROL, 'a', '\b'));
    await $('#city').click();
    await $('#city').sendKeys('Francisco Beltrão');
    await $('#city').sendKeys(Key.chord(Key.ENTER));
    await $('.btn.btn-primary').click();
    await browser.refresh();
    await expect($('#city').getAttribute('value')).toBe('Francisco Beltrão');

  });

});
