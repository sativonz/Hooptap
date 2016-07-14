export default (valdrProvider)=> {
    valdrProvider.addConstraints({
        'CustomerLogin': {
            'email': {
                'email': {
                    'message': 'valdr.email'
                },
                'required': {
                    'message': 'valdr.required'
                }
            }
        },
        'CustomerRegister': {
            'email': {
                'email': {
                    'message': 'valdr.email'
                },
                'required': {
                    'message': 'valdr.required'
                }
            },
            'name': {
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
            }
        }
    });
}