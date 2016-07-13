export default (valdrProvider)=> {
    valdrProvider.addConstraints({
        'CustomerLogin': {
            'email': {
                'email': {
                    'message': 'Debe introducir un email valido.'
                },
                'required': {
                    'message': 'Introduzca un email.'
                }
            }
        },
        'CustomerRegister': {
            'email': {
                'email': {
                    'message': 'Debe introducir un email valido.'
                },
                'required': {
                    'message': 'Introduzca un email.'
                }
            },
            'name': {
                'size': {
                    'min': 4,
                    'max': 25,
                    'message': 'Introduzca un nombre de usuario, 25 carácteres máx.'
                },
                'required': {
                    'message': 'Introduzca un nombre de usuario.'
                }
            }
        }
    });
}