/**
 * Servicio para comprobar la sesión activa, hacer login, etc
 * @service session
 * @memberOf Core
 * @version 0.0.1
 * @author Roger Fos Soler [neorogermail@gmail.com]
 */
export default ($rootScope, $q, Customer) => {

    return {


        /**
         * Determina si estás logueado.
         * @returns {boolean}
         */

        isAuthenticated(){
            $rootScope.customer.logged = Customer.isAuthenticated() ? true : false;
            return Customer.isAuthenticated();
        },

        /**
         * Realiza un login con los datos que le pases.
         * @param {object} params - rememberMe object
         * @param {object} credentials - credentials object with username and password trimmed
         * @returns {promise} - Promesa con el modelo como respuesta.
         */
        login (params, credentials) {
            return Customer.login(params, credentials);
        },

        passwordRecoveryRequest (data) {
            return Customer.reset(data);
        },

        passwordRecoveryConfirm (data) {
            return Customer.confirm(data);
        },

        /**
         * Logout function.
         * @returns {boolean|true}
         */
        logout(){
            return Customer.logout();
        }

    };
};
