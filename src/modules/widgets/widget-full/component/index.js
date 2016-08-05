import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile widget full
 * @module Components
 //TODO revisar description y parametros porque en el excel salen mas cosas que en el wireframe
 * @description Component for widget full view profile, where it is displayed the image, username, email, badges, rewards and the actual level with details
 * of the next level
 * @restrict E
 * @param {String} username username of actual user
 * @param {String} email email of actual user
 * @param {image} image Profile image
 * @param {String} type Name of the state in which the user is at the current level
 * @param {Int} dynamic The numerical value of 200, of the user's progress at the current level
 * @param {Boolean} editable If avoidable or not by the user
 * @param {Boolean} showImage Whether to display the user's image
 * @param {Boolean} showProgressBar Whether to display the progress bar
 * @param {Boolean} showGlobalFeed Whether to display the global feed
 * @param {Boolean} showLevel Whether to display the level block
 * @param {Boolean} showScoreUnits Whether to display the score units block
 * @param {Object} rewardsList The list user rewards
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        idWidget: '=',
        image: '@',
        editable: '=',
        showImage: '=',
        showProgressBar: '=',
        showGlobalFeed: '=',
        showLevel: '=',
        showScoreUnits: '=',
        rewardsList: '@'
    },
    link: (scope, element, attrs)=> {

        Customer.findById(LoopBackAuth.currentUserId).$promise.then(
            (response)=>{
                $rootScope.customer = response;
            }
        );

        //Default Widget values
        //TODO add config parameter when api returns config object

        //?
        scope.editable = angular.isDefined(scope.editable)? scope.editable :  true;
        //TODO cambiar img por definitiva
        scope.image = angular.isDefined(scope.image)? scope.image : 'https://case.edu/medicine/admissions/media/school-of-medicine/admissions/classprofile.png';
        scope.showImage = angular.isDefined(scope.showImage)? scope.showImage : true;
        scope.showProgressBar = angular.isDefined(scope.showProgressBar)? scope.showProgressBar :  true;
        scope.badgesView = angular.isDefined(scope.badgesView)? scope.badgesView : 'list';
        scope.rewardsList = angular.isDefined(scope.rewardsList)? scope.rewardsList : [];



        Customer.getCurrent({
            filter: {include: scope.rewardsList}
        }).$promise.then((response)=> {
            scope.user = response;

        }).catch(()=> {
            //TODO
        });

        //cuando exista un ENDPOINT del API
        //->UNUSED
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






        /*     Widget.findById({id: scope.idWidget}).$promise.then(()=>{
         });*/

    }
});