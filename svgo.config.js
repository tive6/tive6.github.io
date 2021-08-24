/*
* https://github.com/svg/svgo
* */
module.exports = {
  multipass: true, // boolean. false by default
  datauri: 'enc', // 'base64', 'enc' or 'unenc'. 'base64' by default
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // customize plugin options
          convertShapeToPath: {
            convertArcs: true
          },
          // disable plugins
          convertPathData: false
        }
      }
    },
    // Enable builtin plugin not included in preset
    'moreBuiltinPlugin',
    // Enable and configure builtin plugin not included in preset
    {
      name: 'manyBuiltInPlugin',
      params: {
        optionName: 'value',
      },
    },
  ],
};
