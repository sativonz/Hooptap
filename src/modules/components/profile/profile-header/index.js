import template from './template.jade';
import './styles.scss';

/**
 * @ngdoc directive
 * @name Profile header
 * @module Components
 //TODO revisar description porque en el excel salen mas cosas que en el wireframe/mockup
 * @description Component for profile full, where it is displayed the name, email, and profile image
 * @restrict E
 * @param {String} name name of actual user
 * @param {String} email email of actual user
 * @param {image} image Profile image
 * @element ANY
 */
export default(Customer, $rootScope, $q) => ({
    restrict: 'E',
    scope: {
        editProfile: '='
    },
    template,
    link: (scope, element, attrs)=> {

        //TODO logica repetida del logout, ver como gestionarla
        attrs.formLogout = attrs.formLogout || false; //default value
        scope.formLogout = () => {
            Customer.logout().$promise
                .then((response)=> {
                    $rootScope.customer = {};
                    scope.showDropdown = false;
                    $rootScope.logged = false;
                });
        }

        // //document.getElementsByClassName(".profile-widget-full-item__img").
        // $('.profile-widget-full-item__img').hover(()=> {
        //     $('.profile-widget-full-item__img-upload').css("display", "block");
        // });
    }
});