import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Ranking list
 * @module Components
 * @description Component for see the total ranking
 * @restrict E
 * //TODO revisar params
 * @param {String} username Username of the user of the ranking
 * @param {String} position Position in the ranking of the user
 * @param {String} score Score in the ranking of the user
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    template,
    scope: {},
    transclude: true,

    link: (scope, element, attrs)=> {

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
                        "img": "http://hooptap.s3.amazonaws.com/widgets/profile/profile-default.svg",
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
                        "img": "http://hooptap.s3.amazonaws.com/widgets/profile/profile-default.svg",
                        "score": 2450,
                    },
                    {
                        "username": "Ace Ventura",
                        "showProfileImg": true,
                        "img": "http://hooptap.s3.amazonaws.com/widgets/profile/profile-default.svg",
                        "score": 200,
                    }

                ]
            },
        };



    },


});