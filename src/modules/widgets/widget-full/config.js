export default (valdrProvider)=> {
    valdrProvider.addConstraints({
        'Customer': {
            'email': {
                'email': {
                    'message': 'Must be a valid email.'
                }
            }
        }
    });
}