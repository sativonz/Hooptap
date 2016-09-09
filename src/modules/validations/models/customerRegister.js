/**
 * Register validation model
 */

export default {

    'CustomerRegister': {
        'email': {
            'email': {
                'message': 'valdr.email'
            },
            'required': {
                'message': 'valdr.required'
            }
        },
        'username': {
            'size': {
                'min': 4,
                'max': 25,
                'message': 'valdr.size'
            },
            'required': {
                'message': 'valdr.required'
            }
        },
        'password': {
            'size': {
                'min': 6,
                'max': 25,
                'message': 'valdr.size'
            },
            'required': {
                'message': 'valdr.required'
            }
        },
        'rePassword': {
            'size': {
                'min': 6,
                'max': 25,
                'message': 'valdr.size'
            },
            'required': {
                'message': 'valdr.required'
            }
        }
    }
};

