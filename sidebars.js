// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
   docs: [
      "intro",
    {
      type: 'category',
      label: 'AGS - The Payroll System',
      items: [
          'agp-the-payroll-system/introduction',
          'agp-the-payroll-system/use-case-1-adding-a-new-employee'

      ],
    },
  ],
  addendum: [
      'bibliography',
      {
          type: "category",
          label: "Glossary",
          items: [{
              type: 'autogenerated',
              dirName: 'Glossary',
          }],
          "collapsible": true,
          "collapsed": false,

      },
  ]

};

module.exports = sidebars;
