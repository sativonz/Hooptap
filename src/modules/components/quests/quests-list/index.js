import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Quests list
 * @module Components
 * @description Component for see the quest list
 * @restrict E
 * @param {String} title Title of the quests
 * @param {String} desc Description of the quests
 * @param {Image} img Image of the quests
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {},
    link: (scope, element, attrs)=> {

        //FAKE RESPONSE QUESTS
        scope.quests = {
            "quest1": {
                "name": "Quest 1",
                "state": "block",
                "showCompleteQuests": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/quests/Icono-Quest-1.png",
                "expires": "2016-07-26",
                "steps": {

                    "step1": {
                        "complete": false,
                        "title": "Caza los murciegalos",
                        "url": ""

                    },
                    "step2": {
                        "complete": false,
                        "title": "Encuentra a wally",
                        "url": ""
                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo 3",
                        "url": ""
                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo 4",
                        "url": ""
                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo 5",
                        "url": ""
                    },
                },
            },
            "quest2": {
                "name": "Quest 2",
                "state": "new",
                "showCompleteQuests": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/quests/Icono-Quest-2.png",
                "expires": "2016-07-31",
                "steps": {

                    "step1": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step2": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                },
            },
            "quest3": {
                "name": "Quest 3",
                "state": "active",
                "showCompleteQuests": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/quests/Icono-Quest-3.png",
                "expires": "",
                "steps": {

                    "step1": {
                        "complete": true,
                        "title": "Mirar paginas de patrocinadores",
                        "url": "asdfasdf"
                    },
                    "step2": {
                        "complete": true,
                        "title": "titulo",
                        "url": "asdfasdf"
                    },
                    "step3": {
                        "complete": true,
                        "title": "titulo",
                        "url": ""
                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                },
            },
            "quest4": {
                "name": "Quest 4",
                "state": "completed",
                "img": "http://hooptap.s3.amazonaws.com/widgets/quests/Icono-Quest-4.png",
                "expires": "",
                "steps": {

                    "step1": {
                        "complete": true,
                        "title": "Cantar un cuento",
                        "url": ""
                    },
                    "step2": {
                        "complete": true,
                        "title": "titulo",
                        "url": ""
                    },
                    "step3": {
                        "complete": true,
                        "title": "titulo",
                        "url": ""
                    },
                    "step4": {
                        "complete": true,
                        "title": "titulo",
                        "url": ""
                    },
                    "step5": {
                        "complete": true,
                        "title": "titulo",
                        "url": ""
                    },
                },
            },
            "quest5": {
                "name": "Quest 5",
                "state": "off-date",
                "showCompleteQuests": false,
                "img": "http://hooptap.s3.amazonaws.com/widgets/quests/Icono-Quest-5.png",
                "expires": "2015-05-22",
                "steps": {

                    "step1": {
                        "complete": false,
                        "title": "Hacer 20 clicks en la nube",
                        "url": ""

                    },
                    "step2": {
                        "complete": false,
                        "title": "titulo",
                        "url": "http://www.google.es"

                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",
                        "url": ""
                    },
                },
            }
        };
    }

});