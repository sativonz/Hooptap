import template from './template.jade';
import './styles.scss';
import $ from "jquery";
 /**
  * @ngdoc directive
  * @name Notification popup
  * @module Components
  * @description Popup notifications on the activity performed by the user
  * @restrict E
  * @param {String} title Title of the popup
  * @param {String} desc Description of the popup
  * @param {String} img Image of the popup
  * @element ANY
  */
export default($uibModal, $log, clientHelper) => ({
    restrict: 'E',
    template,
    scope: {
        showImage: '=?',
        showDesc: '=?',
        showButton: '=?'
    },

    link (scope, element, attrs) {

         let defaults = {
             showImage: true,
             showDesc: true,
             showButton: true
         };

         clientHelper.setDefaultAttributes(defaults, scope, attrs);
    }
});