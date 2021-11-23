import Page from './page';

class HomePage extends Page {
  get main() {
    return $('main');
  }

  get leftBarParentComponent() {
    return $('app-left-bar-parent');
  }
}

export default new HomePage();
