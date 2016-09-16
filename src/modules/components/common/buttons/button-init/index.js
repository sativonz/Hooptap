import template from './template.jade';
import './styles.scss';
import stampit from 'stampit';
/**
 * @ngdoc directive
 * @name Button init
 * @module Components
 * @description Button to open the widget
 * @restrict E
 * @params {String} text Text of the button
 * @params {String} image Image of the button, positioned to the left
 * @element ANY
 */
export default($rootScope, LoopBackAuth, BaseModel, _hasLogin, _isCustomer) => ({
    restrict: 'E',
    scope: {
        text: '@',
        image: '@'
    },
    template,
    link: (scope, element, attrs)=> {

        element.on('click', (event)=> {
            $rootScope.widgetOpened = true;
            $rootScope.$apply();
        });

        let LoginModel = stampit().compose(BaseModel, _hasLogin);

        if (LoopBackAuth.rememberMe === 'true') {
            LoginModel().getCurrent().then((response)=> {
                scope.customer = response;
            });
        } else {
            //Clear Storage, session and user if not rememberMe
            LoopBackAuth.clearStorage();
            LoopBackAuth.clearUser();
        }

    }
});