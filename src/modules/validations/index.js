/**
 * Validation Module
 * @module Panel.Validation
 * @exports {angular} module
 */

import angular from 'angular-mod';

// Vendor
import 'valdr/valdr.min';
import 'valdr/valdr-message.min';

// Styles
import './styles/styles.scss';

let module = angular.module('app.validation',
    [
        'valdr'
    ])
        .config((valdrProvider) => {
            valdrProvider.addConstraints(require('./models/customerRegister').default);

        })
    ;
export default module.name;
