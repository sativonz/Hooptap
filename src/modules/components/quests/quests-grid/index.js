import template from './template.jade';
import './styles.scss';
/**
 * @ngdoc directive
 * @name Quests grid
 * @module Components
 * @description Component for see the quest in a grid
 * @restrict E
 * @param {String} title Title of the quests
 * @param {String} desc Description of the quests
 * @param {Image} img Image of the quests
 * @element ANY
 */
export default() => ({
    restrict: 'E',
    scope: {
    },
    link: (scope, element, attrs)=>{
        
    },
    template

});