import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
/**
 * @ngdoc directive
 * @name Widget full
 * @module Components
 * @description Component for widget full view profile, where they are displayed all available components dynamically
 * @restrict E
 * @param {Boolean} editProfile If avoidable or not by the user
 * @param {Boolean} showGlobalFeed Whether to display the global feed
 * @param {Boolean} showProfileHeader Whether to display the profile header
 * @param {Boolean} showMarker Whether to display the marker
 * @param {Object} menuOptions Menu options to put title in the GameRoom and hide/show de links
 * @param {Object} levelRow Level row options to hide/show the progressbar and the entire component
 * @element ANY
 */


export default(Customer, LoopBackAuth, $rootScope, $compile, $parse, clientHelper, BaseModel, _isWidget, $timeout, $translate, Notifier) => ({
    restrict: 'E',
    transclude: true,
    template,
    scope: {
        //Button for edit profile in home
        editProfile: '=?',

        //Global feed in home
        showGlobalFeed: '=?',

        //Profile header in home
        showProfileHeader: '=?',

        //Score units in home
        showMarker: '=?',

        //Menu options
        menuOptions: '=?',

        //Level options
        levelRow: '=?',

        //Badges grid cols
        badgeCols: '=?'
    },
    link: {
        pre: function PreLinkingFunction(scope,element,attrs){
            if(!angular.isDefined($rootScope.widgetOpened)){
                $rootScope.widgetOpened = false;
            }
        },
        post: function PostLinkingFunction(scope, element, attrs) {
            scope.loader= false;
            //Default values for widget full
            let defaults = {
                idWidget: "",
                editProfile: true,
                showGlobalFeed: false,
                showMarker: true,
                showProfileHeader: true,
                badgeCols: 4,
                levelRow: {
                    showProgressBarLevel: true,
                    showModule: true
                },
                menuOptions: {
                    titleGameRoom: "Salón de juegos",
                    showQuests: true,
                    showLevel: false,
                    showBadges: true,
                    showRankings: false,
                    showGlobalFeed: false,
                    showEditProfile: true,
                    showMarketplace: false,
                    showGameRoom: false
                }
            };

            //Modelo de zonas, mostrando los 4 tipos para test
            let defaultMarkerOptions = {
                zones: [
                    // [
                    //     {model: 'ScoreUnit' },      // por default, el primero que encuentre
                    //
                    //     {model: 'Level'  },         // por default, asociado al ScoreUnit anterior
                    //
                    //     {model: 'Badge'  }response,         // contador de badges
                    //
                    //     {model: 'Badge'  },         // contador de badges
                    // ],

                    [
                        {model: 'ScoreUnit'},       // por default, el primero que encuentre

                        {model: 'Level'},          // por default, asociado al ScoreUnit anterior

                        {model: 'Badge'}      // contador de badges
                    ]

                    // [
                    //     { model: 'Level' },         // por default, asociado al ScoreUnit anterior
                    //     { model: 'ScoreUnit' }      // por default, el primero que encuentre
                    // ],
                    //
                    // [
                    //     { model: 'Badge' }          // contador de badges
                    // ]
                ]
            };

            let WidgetModel = stampit().compose(BaseModel, _isWidget)({defaults, defaultMarkerOptions});

            clientHelper.setDefaultAttributes(WidgetModel.defaults, scope, attrs);

            scope.scoreDisplayConfig = scope.scoreDisplayConfig || WidgetModel.defaultMarkerOptions;

            scope.$on("$loginSuccess", (event, response)=> {
                    console.log("Objeto customer =>", response);

                if(response.hasOwnProperty(('$promise'))){
                    response.$promise.then((customer)=>{
                        scope.customer = customer;
                        scope.loader = true;

                        //Notifier
                        let msgWelcome = $translate.instant("CUSTOMER.common.welcome");
                        let message = msgWelcome + (scope.customer.username || '')  + " !";
                        Notifier.loginRegisterSuccess({title: message, image: require('../images/default-img-popover.png')});

                    });
                }


            });

            scope.$on("$registerSuccess", (event, customer)=> {
                scope.customer = customer;
                scope.loader = true;
            });
            scope.$on("$logoutSuccess", (event) => {
                scope.customer = {};
                scope.loader = false;
            });
        }
    }

});
