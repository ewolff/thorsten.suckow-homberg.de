// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [{
            type: 'category',
            label: 'Articles',
            link: {type: 'doc', id: 'articles/index'},
            items: [
                {
                    type: 'category',
                    label: 'The Payroll System',
                    link: {type: 'doc', id: 'articles/agp-the-payroll-system/index'},
                    items: [
                        'articles/agp-the-payroll-system/use-case-1-adding-a-new-employee'
                    ],
                    "collapsed": false
                },
                "articles/dependency-injection-in-javascript/index",
                "articles/sencha-extjs-beyond-es5/index",
                "articles/using-php-enums-as-method-calls/index",
                "articles/downloadable-assets-with-github-actions/index",
                {
                    type: 'category',
                    label: 'Creating ExtJS applications with coon.js',

                    link: {type: 'doc', id: 'articles/creating-extjs-applications-with-coon-js/index'},
                    items: [
                        'articles/creating-extjs-applications-with-coon-js/introduction',
                        'articles/creating-extjs-applications-with-coon-js/packages-and-configuration-options',
                        'articles/creating-extjs-applications-with-coon-js/configuration-details-and-plugins',
                        'articles/creating-extjs-applications-with-coon-js/registering-services-and-using-the-service-locator',

                    ],
                    "collapsed": false
                },
                "articles/javascript-promises-return-values-and-error-handlers/index",
                "articles/a-fluent-interface-for-javascript-promises/index"
            ],
    }],
    toolbox: [
        {
            type: "category",
            label: "Catalogue",
            link: {type: 'doc', id: 'index'},
            items: [{
                type: 'autogenerated',
                dirName: 'Glossary',
            }],
            "collapsible": true,
            "collapsed": false,
        },
        'bibliography'
    ]

};

module.exports = sidebars;
