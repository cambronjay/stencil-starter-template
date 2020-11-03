
import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://io.stencil.local/'
    }
  ],
  globalStyle: 'src/global/global.css',
  globalScript: 'src/global/global.ts',
  copy: [
    { src: 'robots.txt' }
  ]
};