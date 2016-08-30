module.exports = function (grunt) {

    let pkg = grunt.file.readJSON('package.json');

    grunt.loadNpmTasks('grunt-docular');



    grunt.config.init({

        pkg: pkg,

        docular: {

            baseUrl: "/" + pkg.version + "/docs/",

            useHtml5Mode: false,

            docular_webapp_target: 'build/docs',

            groups: [

                {
                    groupTitle: 'Panel V3 API',
                    groupId: 'panelV3',

                    groupIcon: 'icon-book',

                    sections: [

                        {

                            id: 'htPanelV3',

                            title: 'Hooptap Panel v3 API',

                            scripts: [

                                'src/**/*.js'

                            ]
                        }
                    ]
                }
            ],
            showDocularDocs: true,
            showAngularDocs: false
        }
    });
    grunt.registerTask('api', ['docular']);

};
