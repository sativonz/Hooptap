module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-docular');



    grunt.config.init({

        pkg: grunt.file.readJSON('package.json'),

        docular: {

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