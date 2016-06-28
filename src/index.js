//Import angularHT
import angular from 'angular-mod';

//Init template with all widgets
import template from './index.jade';

//Vendor
import 'angular-storage';
import 'angular-resource';
import tabs from 'angular-ui-bootstrap/src/tabs';

//Import Loopback Angular SDK
import './common/services/angular-sdk.js';

//Plugins

(function () {

    /*var body = angular.element('body').html();
     angular.element('body').remove();
     angular.element('html').append('<body></body>');
     angular.element('body').append('<div id="originalBody"></div>');
     angular.element('#originalBody').append(body);
     angular.element('body').append('<div id="htbody"></div>');
     angular.element('#htbody').append(template());*/
    angular.element('body').append(template());
    angular.module('htWidget',
        [
            //Vendor injectors
            'ngResource', /*angular resources*/
            tabs,
            //Plugins
            //SDK Services
            //SDK Loopback services
            'lbServices',

            //Modules
            require('./modules/base').default,

            //Widgets
            require('./modules/widgets/widget-prueba').default,
            require('./modules/widgets/widget-notifications').default,
            require('./modules/widgets/widget-rankings').default,
            require('./modules/widgets/widget-profile-advanced').default,
            require('./modules/widgets/widget-profile-full').default,
            require('./modules/widgets/widget-profile-simple').default,
            require('./modules/widgets/widget-levels').default
        ])
    //Controller for widget
        .controller('htWidgetCtrl', ($scope, $compile, Member, Badge)=> {
            //hooptapSDK object for sdk on javascript
            window.hooptapSDK = {};
            window.hooptapSDK.Member = Member;
            window.hooptapSDK.Badge = Badge;
            //Example of widget render
            //console.log(angular.element('#ht-widget').html());
            $compile(angular.element('#ht-widget').html())($scope);
            // angular.element('#htWidget').append('<widget1></widget1>');

        })
        .config(require('./config').default)
        .run(require('./boot').default);

    //Angular bootstrap to render #htWidget div with htWidget Module
    angular.bootstrap('#ht-widget', ['htWidget']);

    console.log(angular.version.full);

}());