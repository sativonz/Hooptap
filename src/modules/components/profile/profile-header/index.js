import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Profile header
 * @module Components
 * @description Component for show a profile header, where it is displayed the name, email, and profile image
 * @restrict E
 * @param {Boolean} editProfile Button to show the view for change the data profile
 * @param {Object} item Object with full information of the customer
 * @element ANY
 */
export default(Customer, $rootScope, $q) => ({
    restrict: 'E',
    scope: {
        editProfile: '=',
        item: '='
    },
    template,
    link: (scope, element, attrs)=> {

        // diffs: {
        //
        // }
        //
        // scope.uploadImgProfile =  function() {
        //     Customer.prototype$updateAttributes({id: this.id}, diffs).$promise
        //         .then((data) => {
        //
        //         })
        //
        // };


    }
});