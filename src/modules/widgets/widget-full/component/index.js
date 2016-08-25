import template from './template.jade';
import './styles.scss';
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
 * @param {Boolean} menuOptions Menu options to put title in the GameRoom and hide/show de links
 * @param {Boolean} levelRow Level row options to hide/show the progressbar and the entire component
 * @param {Boolean} awardOptions Award options to hide/show the image, description and button
 * @element ANY
 */
export default(Customer, LoopBackAuth, $rootScope,$compile, $parse) => ({
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
        levelRow: '=?'

    },
    link: (scope, element, attrs)=> {

        //Default values for widget full
        let defaults = {
            idWidget:"",
            editProfile: true,
            showGlobalFeed:true,
            showMarker:true,
            showProfileHeader:true,
            levelRow:{
                showProgressBarLevel: true,
                showModule: true,
            },
            menuOptions: {
                titleGameRoom: "Salón de juegos",
                showQuests: true,
                showLevel: false,
                showBadges: true,
                showRankings: true,
                showGlobalFeed: false,
                showEditProfile: true,
                showMarketplace: false,
                showGameRoom: true
            }
        };

        for(var optionKey in defaults) {
            if(attrs[optionKey]){
                console.log(attrs[optionKey]);
                if(scope[optionKey] && typeof scope[optionKey] === 'object'){
                    scope[optionKey] = Object.assign(defaults[optionKey], scope[optionKey]);
                }
            }else{
                scope[optionKey] = defaults[optionKey];
            }}
        //console.log(scope);


        //Modelo de zonas, mostrando los 4 tipos para test
        let defaultMarkerOptions = {
            zones: [
                [
                    {model: 'ScoreUnit' },      // por default, el primero que encuentre

                    {model: 'Level'  },         // por default, asociado al ScoreUnit anterior

                    {model: 'Badge'  },         // contador de badges

                    {model: 'Badge'  },         // contador de badges
                ],

                [
                    {model: 'ScoreUnit'},       // por default, el primero que encuentre

                    {model: 'Level' },          // por default, asociado al ScoreUnit anterior

                    {model: 'Badge' },          // contador de badges
                ],

                [
                    { model: 'Level' },         // por default, asociado al ScoreUnit anterior
                    { model: 'ScoreUnit' }      // por default, el primero que encuentre
                ],

                [
                    { model: 'Badge' }          // contador de badges
                ]
            ]
        };

        $rootScope.scoreDisplayConfig = $rootScope.scoreDisplayConfig || defaultMarkerOptions;
    }
});


