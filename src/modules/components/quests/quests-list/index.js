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
                "state": "block",
                "showCompleteQuests": false,
                "img": "",
                "steps": {

                    "step1": {
                        "complete": true,

                    },
                    "step2": {
                        "complete": true,

                    },
                    "step3": {
                        "complete": false,

                    },
                    "step4": {
                        "complete": false,

                    },
                    "step5": {
                        "complete": true,
                    },
                },
            },
            "quest2": {
                "state": "new",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "steps": {

                    "step1": {
                        "complete": true
                    },
                    "step2": {
                        "complete": true

                    },
                    "step3": {
                        "complete": false

                    },
                    "step4": {
                        "complete": false

                    },
                    "step5": {
                        "complete": true

                    },
                },
            },
            "quest3": {
                "state": "active",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "steps": {

                    "step1": {
                        "complete": true

                    },
                    "step2": {
                        "complete": true

                    },
                    "step3": {
                        "complete": false

                    },
                    "step4": {
                        "complete": false

                    },
                    "step5": {
                        "complete": true

                    },
                },
            },
            "quest4": {
                "state": "new",
                "showCompleteQuests": false,
                "img": "",
                "steps": {

                    "step1": {
                        "complete": true

                    },
                    "step2": {
                        "complete": true

                    },
                    "step3": {
                        "complete": false

                    },
                    "step4": {
                        "complete": false

                    },
                    "step5": {
                        "complete": true

                    },
                },
            },
            "quest5": {
                "state": "off-date",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "steps": {

                    "step1": {
                        "complete": true

                    },
                    "step2": {
                        "complete": true

                    },
                    "step3": {
                        "complete": false

                    },
                    "step4": {
                        "complete": false

                    },
                    "step5": {
                        "complete": true

                    },
                },
            },
            "quest6": {
                "state": "active",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "steps": {

                    "step1": {
                        "complete": true,

                    },
                    "step2": {
                        "complete": true,

                    },
                    "step3": {
                        "complete": false,

                    },
                    "step4": {
                        "complete": false,

                    },
                    "step5": {
                        "complete": true,

                    },
                },
            },
            "quest7": {
                "state": "inactive",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "steps": {

                    "step1": {
                        "complete": true,

                    },
                    "step2": {
                        "complete": true,

                    },
                    "step3": {
                        "complete": false,

                    },
                    "step4": {
                        "complete": false,

                    },
                    "step5": {
                        "complete": true,

                    },
                },
            },
            "quest8": {
                "state": "lapsed",
                "showCompleteQuests": false,
                "img": "https://hooptap.s3.amazonaws.com/upload/cd63eb52f48752a742a13eac005de0dc.png",
                "steps": {

                    "step1": {
                        "complete": true,

                    },
                    "step2": {
                        "complete": true,

                    },
                    "step3": {
                        "complete": false,

                    },
                    "step4": {
                        "complete": false,

                    },
                    "step5": {
                        "complete": true,

                    },
                },
            }
        };


    },
    template

});