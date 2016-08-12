import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Widget full
 * @module Components
 * @description Component for widget full view profile, where they are displayed all available components dynamically
 * @restrict E
 * @param {Boolean} editProfile If avoidable or not by the user
 * @param {Boolean} showLevel Whether to display the level block
 * @param {Boolean} showProgressBarLevel Whether to display the progress bar in the level component
 * @param {Boolean} showGlobalFeed Whether to display the global feed
 * @param {Boolean} showMarker Whether to display the score units block
 * @param {String} titleGameRoom The title in the menu for the GameRoom
 * @param {String} showImg: Whether to display in the notifications awards the image
 * @param {String} showDesc Whether to display in the notifications awards the description
 * @param {String} showBtn Whether to display in the notifications awards the button
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        //Button for edit profile in home
        editProfile: '=',

        //Global feed in home
        showGlobalFeed: '=',

        //Profile header in home
        showProfileHeader: '=',

        //Score units in home
        showMarker: '=',

        //Menu options
        menuOptions: '=',

        //Level options
        levelRow: '=',

        //Award options
        awardOptions: '=',
    },
    link: (scope, element, attrs)=> {

        let defaultMarkerOptions = {
            zones: [
                [
                    {
                        model: 'ScoreUnit'  // por default, el primero que encuentre
                    },

                    {
                        model: 'Level'      // por default, asociado al ScoreUnit anterior
                    },

                    {
                        model: 'Badge'      // contador de badges
                    },

                    {
                        model: 'Badge'      // contador de badges
                    },
                ],
                [
                    {
                        model: 'ScoreUnit',  // por default, el primero que encuentre
                        id: '5785e3d56d40563a4c409435'
                    },

                    {
                        model: 'Level'      // por default, asociado al ScoreUnit anterior
                    },

                    {
                        model: 'Badge'      // contador de badges
                    }
                ],
                [
                    { model: 'Level' },     // por default, asociado al ScoreUnit anterior
                    { model: 'ScoreUnit' }  // por default, el primero que encuentre
                ],
                [
                     { model: 'Badge' }      // contador de badges
                ]
            ]
        };

        $rootScope.scoreDisplayConfig = $rootScope.scoreDisplayConfig || defaultMarkerOptions;








        //->UNUSED
        //
        //
        //
        // Customer.getCurrent().$promise
        //     .then((response)=> {
        //     scope.user = response;
        //     debugger;
        // }).catch((error)=> {
        //     //TODO
        //     console.log( 'error', error );
        //     debugger;
        // });
        //
        //
        // scope.editable = angular.isDefined(scope.editable)? scope.editable :  true;
        // //TODO cambiar img por definitiva
        // scope.image = angular.isDefined(scope.image)? scope.image : 'https://case.edu/medicine/admissions/media/school-of-medicine/admissions/classprofile.png';
        // scope.showImage = angular.isDefined(scope.showImage)? scope.showImage : true;
        // scope.showProgressBar = angular.isDefined(scope.showProgressBar)? scope.showProgressBar :  true;
        // scope.badgesView = angular.isDefined(scope.badgesView)? scope.badgesView : 'list';
        // scope.rewardsList = angular.isDefined(scope.rewardsList)? scope.rewardsList : [];
        //
        //
        // scope.menuItems = [
        //     {view: $rootScope.WPFviewQuests, title: 'QUESTS.title'},
        //     {view: $rootScope.WPFviewBadges, title: 'BADGES.title'},
        //     {view: $rootScope.WPFviewMarkerSU, title: 'SCORE_UNITS.title'},
        //     {view: '', title: 'CUSTOMER.common.edit'}
        // ];
        //
        //
        // console.log( '$rootScope.WPFviewBadges', $rootScope.WPFviewBadges );
        // $rootScope.currentView = 'profileWidgetFull.default';
        //
        // //Progressbar config
        // scope.max = 200;
        // scope.random = function () {
        //     //TODO pasar valor a la función dinamicamente
        //     var value = 49;
        //     var type;
        //
        //     if (value < 20) {
        //         type = 'Newbie';
        //     } else if (value < 40) {
        //         type = 'Rookie';
        //     } else if (value < 60) {
        //         type = 'Beginner';
        //     } else if (value < 80) {
        //         type = 'Talented';
        //     } else if (value < 100) {
        //         type = 'Skilled!';
        //     } else if (value < 120) {
        //         type = 'Intermediate!';
        //     } else if (value < 140) {
        //         type = 'Skillful!';
        //     } else if (value < 160) {
        //         type = 'Advanced!';
        //     } else if (value < 180) {
        //         type = 'Senior!';
        //     } else if (value < 199) {
        //         type = 'Expert!';
        //     }
        //
        //     //scope.showWarning = type === 'Senior' || type === 'Expert';
        //
        //     scope.dynamic = value;
        //     scope.type = type;
        // };
        //
        // scope.random();
        //
        // scope.randomStacked = function () {
        //     scope.stacked = [];
        //     var types = ['success', 'info', 'warning', 'danger'];
        //
        //     for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
        //         var index = Math.floor(Math.random() * 4);
        //         scope.stacked.push({
        //             value: Math.floor(Math.random() * 30 + 1),
        //             type: types[index]
        //         });
        //     }
        // };
        // scope.randomStacked();
        //
        //
        //cuando exista un ENDPOINT del API
        //Widget.findById({id: scope.idWidget}).$promise.then(()=>{
        //});





    }
});


