import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Ranking list
 * @module Components
 * @description Component for see the elected ranking with her corresponding score unit
 * @restrict E
 * @element ANY
 */
export default($rootScope, Customer, LoopBackAuth) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {},

    link: (scope, element, attrs)=> {


        $rootScope.$on("$rankingType", (event, item)=> {
            console.log("asdfasddfas", item);
        });


        scope.rankings = {
            "diamond": {
                "name": "Ranking de rubíes",
                "img": "http://hooptap.s3.amazonaws.com/widgets/ranking/ruby.png",
                "users": [
                    {
                        "username": "Bruce Willis",
                        "showProfileImg": true,
                        "img": "http://hooptap.s3.amazonaws.com/widgets/ranking/Bruce.png",
                        "score": 1120,
                    },
                    {
                        "username": "Jessica Flower",
                        "showProfileImg": true,
                        "mePosition": true,
                        "img": "http://hooptap.s3.amazonaws.com/widgets/ranking/Jessica.png",
                        "score": 1600,
                    },
                    {
                        "username": "Manolo Cabezabolo",
                        "showProfileImg": true,
                        "img": "http://hooptap.s3.amazonaws.com/widgets/ranking/manolo.png",
                        "score": 900,
                    },
                    {
                        "username": "Mary Jane",
                        "showProfileImg": true,
                        "img": "http://hooptap.s3.amazonaws.com/widgets/ranking/Mary.png",
                        "score": 1500,
                    },
                    {
                        "username": "Harry Popotter",
                        "showProfileImg": true,
                        "score": 2000,
                    },
                    {
                        "username": "Ramona Mona",
                        "showProfileImg": true,
                        "img": "http://hooptap.s3.amazonaws.com/widgets/ranking/Ramona.png",
                        "score": 2200,
                    },
                    {
                        "username": "Willi Fok",
                        "showProfileImg": true,
                        "score": 2450,
                    },
                    {
                        "username": "Ace Ventura",
                        "showProfileImg": true,
                        "score": 200,
                    }

                ]
            },
        };

    },


});