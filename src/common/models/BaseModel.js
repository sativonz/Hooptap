import angular  from 'angular-mod';
import _        from 'lodash';
import stampit  from 'stampit';


export default ($q, $injector, _Extendable) => {
    return stampit()
        .compose(_Extendable)
        .init(function ({original, instance, stamp}) {

            /*--------------------------------------------------------------------------------------------
             INIT
             --------------------------------------------------------------------------------------------*/
            /**
             * @memberOf Common.model:BaseModel
             * @stampit init
             * @name init
             */

            this.__proto__._stamp = stamp;
            this.initialize(original);

        })
        .methods({

            /*--------------------------------------------------------------------------------------------
             METHODS
             --------------------------------------------------------------------------------------------*/

            /**
             * Extends the default data with the model passed. The instances created with this model will be compared
             * with this model (we call this model 'original') to check if the instance has changes to be saved.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @param {Object} model - The data of this instance.
             */
            initialize (model = {}) {
                Object.assign(this._original, this.parse(angular.copy(model)));
                Object.assign(this, this._defaults, this.parse(angular.copy(model)));
                this._initialized = true;
            },

            /**
             * Transforms the response of the api to a model more usable for the web. It's automatically called by
             * the function 'initialize', which should be called after calling the api. The opposite transformation of
             * 'parse' is made by the function 'prepare'.
             *
             * We declare this void function in order to a model that extend BaseModel doesn't require to declare this
             * function if they don't want to do any transformation.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @param {object} model - Will be the model getted by the api.
             * @returns {object} The modified model used to construct this instance.
             */
            parse (model) {

                if (model.annotations === {}) model.annotations = "";

                return model;
            },


            /**
             * Transform our model to adapt the model of the api, undoing the changes mades by 'parse' or by 'populate'.
             * It's automatically called by 'toJson', to prepare data to send to the api.
             *
             * We declare this void function in order to a model that extend BaseModel doesn't require to declare this
             * function if they don't want to do any transformation.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @param {object} model - Will be the model of the instance.
             * @returns {object} The modified model ready to send to the api.
             */
            prepare () {
                return {};
            },

            /**
             * Makes a copy of this instance.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @returns {Object} The copy.
             */
            clone () {

                let originalData = this.toJson();
                delete originalData.id;

                let clone = this._stamp(originalData);

                return clone;
            },

            /**
             * Makes the corresponding calls to the server, converting the attributes that needs server-side operations
             * to the correct form to work with. The function 'prepare' makes the opposite transformation ('prepare'
             * function makes the opposite of 'parse' too).
             *
             * Note that unlike 'parse' and 'prepare', 'populate' returns a promise.
             *
             * We declare this void function in order to call the function and have a promise in response. Models that
             * extend this model will overwrite this function.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @returns {Promise.<Object, error>} Returns this instance.
             */
            populate () {
                this._populated = true;
                return $q.resolve(this);
            },

            // Devuelve un array de key => valor unpopulado de esa key
            // Que esta función NO MODIFIQUE THIS POR DIOS
            unpopulate () {
                return {};
            },

            /**
             * Sets the name of the model and injects the service of the model to make it available
             * from anywhere the model exists.
             *
             * @memberOf Common.model:BaseModel
             * @param model
             */
            setRemoteModel (model) {
                this._remoteModel = model;
                this._factory = $injector.get(model);
            },


            /**
             * Resets with the original data with which this instance was created.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             */
            reset () {
                let ourKeys = Object.keys(this);
                ourKeys.forEach(key => {
                    if (key[0] != '_') {
                        delete this[key];
                    }
                });

                Object.assign(this, this._defaults, angular.copy(this._original));
            },

            /**
             * Checks if the object exists in remote. An object loaded via IO object always has a id property
             * @returns {boolean}
             */
            isNew () {
                return this.id === 'new';
            },

            /**
             * Converts this instance to Json, ignoring the keys that starts with '_'.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @param {string|object} [filter=this] - The filter object
             * @returns {Object} The Json Object.
             */
            toJson (filter = false) {

                if (filter.constructor === Array && !filter.length) {
                    return {};
                }

                if (typeof filter === 'string') {
                    filter = [filter];
                }

                // Calculate iterable keys
                let keys = Object.keys(this);

                let unpopulated = this._populated ? this.unpopulate(this) : {};
                let unpopulatedKeys = Object.keys(unpopulated);
                let prepared = this.prepare(Object.assign({}, this, unpopulated));
                let preparedKeys = Object.keys(prepared);


                let result = {};
                _.each(keys, (key) => {
                    if (key[0] == '_' && typeof this._original[key] == 'undefined') {

                        if (!~this._whitelist.indexOf(key))
                            return true;

                    }
                    if (key[0] == '$') {
                        return true;
                    }
                    if (filter && !~filter.indexOf(key)) {
                        return true;
                    }

                    let value = this[key];
                    if (~preparedKeys.indexOf(key)) {
                        value = prepared[key];
                    } else if (~unpopulatedKeys.indexOf(key)) {
                        value = unpopulated[key];

                    }

                    if (value && value.toJson) {
                        value = value.toJson();
                    }

                    result[key] = value;
                });


                return removeAngularDollars(result);
            },


            /**
             * Gets a Json Object that has only the changes made to this model. Can pass a filter to only see some
             * keys and ignore the changes of the rest.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @param {Array<string>|string} [filter]
             * @returns {Object} The json Object.
             */
            toJsonDiffs (filter) {
                let diffs = this.getDiffs(filter);
                return this.toJson(Object.keys(diffs));
            },


            /**
             * Makes a copy of this instance.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @returns {Object} The copy.
             */
            clone () {
                let originalData = this.toJson();
                delete originalData.id;
                return this._stamp(originalData);
            },

            getDiffs (filter = false, limit = false, ignoreDefaults = false) {
                filter = typeof filter == 'string' ? [filter] : filter;
                limit = limit || 0;

                // Calculate iterable keys
                let originalKeys = Object.keys(this._original);
                let ourKeys = Object.keys(this);
                let keys = _.uniq(originalKeys.concat(ourKeys));

                let unpopulated = this._populated ? this.unpopulate(this) : {};
                let unpopulatedKeys = Object.keys(unpopulated);


                let result = {};
                let count = 0;
                _.each(keys, (key) => {
                    if (key[0] == '_' || key[0] == '$') {
                        if (!~this._whitelist.indexOf(key))
                            return true;
                    }

                    if (filter && !~filter.indexOf(key)) {
                        return true;
                    }
                    let modified = false,
                        value = this[key],
                        valueDefault = this._defaults[key],
                        valueOriginal = this._original[key],
                        hasUnpopulatedValue = ~unpopulatedKeys.indexOf(key),
                        hasModifiedFunc = value && !!value.isModified,
                        isValueUndefined = typeof value == 'undefined',
                        isKeyInOriginals = ~originalKeys.indexOf(key);

                    if (ignoreDefaults && !isKeyInOriginals && angular.equals(value, valueDefault)) {

                        modified = false;
                    } else if (!isKeyInOriginals || isValueUndefined) {
                        modified = true;
                    } else if (hasModifiedFunc) {
                        modified = value.isModified();
                    } else {
                        value = hasUnpopulatedValue ? unpopulated[key] : value;
                        modified = !angular.equals(value, valueOriginal);
                    }

                    if (modified) {
                        result[key] = this[key];
                        if (++count == limit) {
                            return false;
                        }
                    }
                });
                return result;
            },

            /**
             * Checks if this instance has modified attributes.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @param {Array<string>|string} [filter=false] - Filter the instance keys to only check the passed in this array. If
             * not passed nothing the function will check all the keys.
             * @returns {boolean} If has modifications.
             */
            isModified (filter) {
                let diffs = this.getDiffs(filter, 1, true);
                return !!Object.keys(diffs).length;
            },

            /**
             * Checks if a property exists. Optionally you can pass a function to check the property
             * @param property - The name of the property
             * @param funcCheck - Function to check. Has to return true if valid value or false if not.
             * @returns {boolean}
             */
            hasProperty (property, funcCheck = () => true) {
                if (typeof this[property] == 'undefined') {
                    return false;
                }

                return funcCheck(this[property]);
            },

            /**
             * Same as hasProperty but with an array of properties
             * @param properties
             * @param funcCheck
             * @returns {boolean}
             */
            hasProperties (properties, funcCheck = () => true) {
                let result = true;
                _.each(properties, (prop) => {
                    let propValidity = this.hasProperty(prop, funcCheck);
                    if (!propValidity) {
                        result = false;
                        return false;
                    }
                });
                return result;
            }

        })
        .refs({

            /*--------------------------------------------------------------------------------------------
             REFS
             --------------------------------------------------------------------------------------------*/

            /**
             * Here a Model will save the defaults values. Will be used to fill the object if the data passed to
             * construct the instance not have some attribute that is needed.
             *
             * @memberOf Common.model:BaseModel
             * @stampit refs
             */
            _defaults: {
                annotations: '',
                productId: "57c846e00f761821e71ef1fc" //TODO change to actual product id
            },
            /**
             * This Whitelist enables managing underscored params.
             *
             * @memberOf Common.model:BaseModel
             * @stampit method
             * @returns {Array} Collection of param names.
             */
            _whitelist: [''],

            _basemodel: 'BaseModel'


        })
        .props({

            /*--------------------------------------------------------------------------------------------
             PROPS
             --------------------------------------------------------------------------------------------*/
            id: 'new',

            /**
             * @memberOf Common.model:BaseModel
             * @stampit props
             */
            _initialized: false,

            /**
             * @memberOf Common.model:BaseModel
             * @stampit props
             */
            _original: {},

            /**
             * @memberOf Common.model:BaseModel
             * @stampit props
             */
            _factory: false

        });

    // Removes angular dollars
    function removeAngularDollars(obj) {
        return JSON.parse(angular.toJson(obj));
    }

};