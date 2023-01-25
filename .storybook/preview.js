// import '../src/plugins/infineonIcons';
import '../src/global/global-theme.scss'
import {defineCustomElements} from '../loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
  },
  previewTabs: {
    // canvas: {
    //   hidden: true,
    // },
    // 'storybook/docs/panel': { index: -1 },
  },
  // viewMode: 'docs',

  docs: {
     source: {
        state: 'open',
    },
  }
}
