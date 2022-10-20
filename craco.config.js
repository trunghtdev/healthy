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
              '@processing-color': '#EA6C00',
              '@text-color': '#414141',
              '@heading-color': '#414141',
              '@input-icon-hover-color': '#414141',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};