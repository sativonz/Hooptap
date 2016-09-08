export default (valdrProvider)=> {
    valdrProvider.addConstraints({
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
                    'message': 'valdr.nameSize'
                },
                'required': {
                    'message': 'valdr.required'
                }
            },
            'password': {
                'required': {
                    'message': 'valdr.required'
                }
            },
            'rePassword': {
                'required': {
                    'message': 'valdr.required'
                }
            }
        }
    });
}