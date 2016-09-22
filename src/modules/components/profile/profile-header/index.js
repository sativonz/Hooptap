import template from './template.jade';
import './styles.scss';
var defaultImage = require('./images/profile-default.svg');
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
    template,
    scope: {
        editProfile: '=',
        item: '='
    },
    link: (scope, element, attrs)=> {

    //TODO Set default image and username from parameter too
    scope.defaultImage = defaultImage;
    scope.defaultUsername = "Usuario";

    scope.uploadImgProfile = () => {

        //dom.reset('control');
        element.on('change', function (evt) {

            let reader 	= new FileReader();
            let image  	= new Image();
            let file 	= evt.target.files[0];

            reader.readAsDataURL(file);
            reader.onloadend = function () {
                Customer.prototype$updateAttributes({id: scope.item.id }, { image: reader.result } ).$promise
                    .then((response) => {
                        //console.log("Save response", response);
                        scope.item.image = reader.result;
                    })
                    .catch((err) => {
                        //console.log(err);
                    });
            };
        });
    }


    }
});