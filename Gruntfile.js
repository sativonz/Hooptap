module.exports = function (grunt) {

    let pkg = grunt.file.readJSON('package.json');
    let regPkg =  pkg.version.replace(/\./g,'-');
    grunt.loadNpmTasks('grunt-docular');



    grunt.config.init({

        pkg: pkg,

        docular: {

          //  baseHref: "",
            //baseUrl:pkg.version + '/docs/',
            //baseUrl:"/v" + pkg.version + '/docs/',
            baseUrl: "/docs/",
            useHtml5Mode: false,

            docular_webapp_target: 'build/docs/',

            groups: [
              {
                    groupTitle: 'Modules',
                    groupId: 'modules',
                    groupIcon: 'icon-book',
                    sections: [
                        {
                            id: 'components',
                            title: 'Components for Widgets Construction',
                            scripts: [
                                'src/modules/components/**/*.js'
                            ]
                        },
                        {
                            id: 'widgets',
                            title: 'Widgets',
                            scripts: [
                                'src/modules/widgets/**/*.js'
                            ]
                        }
                    ]
                },
                {
                      groupTitle: 'Services',
                      groupId: 'services',
                      groupIcon: 'icon-book',
                      sections: [
                          {
                              id: 'hooptap-api',
                              title: 'Hooptap Api Service',
                              scripts: [
                                  'src/common/services/angular-sdk.js'
                              ]
                          }
                      ]
                  }
            ],
            showDocularDocs: false,
            showAngularDocs: false
        }
    });
    grunt.registerTask('api', ['docular']);

};
