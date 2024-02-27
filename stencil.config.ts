import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';
import { Config } from '@stencil/core';

// props binding
const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets/fontawesome/webfonts', dest: 'webfonts' },
        { src: 'assets/material/fonts/*', dest: 'webfonts' }
      ]
    },
    angularOutputTarget({
      componentCorePackage: 'C:/Users/sgeorge/Documents/Sudhakar_George/Angular_Projects/stencil-storybook/web-components', // let's comeback here later
      directivesProxyFile: 'C:/Users/sgeorge/Documents/Sudhakar_George/Angular_Projects/stencil-storybook/stencil-angularapp-demo/src/lib/stencil-generated/proxies.ts', // let's comeback here later
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [sass()],
  testing: {
    browserHeadless: "new",
  },
};
