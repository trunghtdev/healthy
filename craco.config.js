const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@layout-header-background': '#414141',
              '@primary-color': '#EA6C00',
              '@primary-color-300': '#FFCC21',
              '@light': '#FFFFFF',
              '@primary-color-500': '#EA6C00',
              '@primary-color-400': '#FF963C',
              '@processing-color': '#EA6C00',
              '@text-color': '#414141',
              '@heading-color': '#414141',
              '@input-icon-hover-color': '#414141',
              '@dark-600': '#2E2E2E',
              '@dark-500': '#414141',
              '@gray-400': '#777777',
              '@secondary-300': '#8FE9D0',
              '@primary-300-400': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};