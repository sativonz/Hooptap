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
    scope: {},
    link: (scope, element, attrs)=> {

        // scope.toggleDetailQuest = () => {
        //
        //     //Toggle the details on quest
        //     scope.showDetailQuests = !scope.showDetailQuests;
        //
        //     //No funcional, label active
        //     // if($('.quest--row--status-label').hasClass("hide")){
        //     //     $('.quest--row--status-label').show("slow");
        //     // }else if (!$('.quest--row--status-label').hasClass("hide")){
        //     //     $('.quest--row--status-label').hide("slow");
        //     // }
        //     // $('.quest--row--status-label').toggleClass("hide");
        //
        // };

        scope.quests = {
            "quest1": {
                "name": "Block",
                "state": "block",
                "showCompleteQuests": false,
                "img": "",
                "expires": "2016-07-26",
                "steps": {

                    "step1": {
                        "complete": false,
                        "title": "Caza los murciegalos",

                    },
                    "step2": {
                        "complete": false,
                        "title": "Encuentra a wally",
                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo 3",
                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo 4",
                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo 5",
                    },
                },
            },
            "quest2": {
                "name": "New",
                "state": "new",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "expires": "2016-07-31",
                "steps": {

                    "step1": {
                        "complete": true,
                        "title": "Visita el video de youtube",
                    },
                    "step2": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",

                    },
                },
            },
            "quest3": {
                "name": "Active",
                "state": "active",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "expires": "",
                "steps": {

                    "step1": {
                        "complete": true,
                        "title": "Mirar paginas de patrocinadores",

                    },
                    "step2": {
                        "complete": true,
                        "title": "titulo",

                    },
                    "step3": {
                        "complete": true,
                        "title": "titulo",

                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",

                    },
                },
            },
            "quest4": {
                "name": "Completed",
                "state": "completed",
                "img": "",
                "expires": "",
                "steps": {

                    "step1": {
                        "complete": true,
                        "title": "Cantar un cuento",

                    },
                    "step2": {
                        "complete": true,
                        "title": "titulo",

                    },
                    "step3": {
                        "complete": true,
                        "title": "titulo",

                    },
                    "step4": {
                        "complete": true,
                        "title": "titulo",

                    },
                    "step5": {
                        "complete": true,
                        "title": "titulo",

                    },
                },
            },
            "quest5": {
                "state": "off-date",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "expires": "2015-05-22",
                "steps": {

                    "step1": {
                        "complete": false,
                        "title": "Hacer 20 clicks en la nube",

                    },
                    "step2": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",

                    },
                },
            },
            "quest6": {
                "state": "inactive",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "expires": "",
                "steps": {

                    "step1": {
                        "complete": false,
                        "title": "Hola que dise",

                    },
                    "step2": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step3": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step4": {
                        "complete": false,
                        "title": "titulo",

                    },
                    "step5": {
                        "complete": false,
                        "title": "titulo",

                    },
                },
            }
        };
    },
    template

});