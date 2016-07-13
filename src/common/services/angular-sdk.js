// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
    // Export the *name* of this Angular module
    // Sample usage:
    //
    //   import lbServices from './lb-services';
    //   angular.module('app', [lbServices]);
    //
    module.exports = "apiServices";
}

(function(window, angular, undefined) {'use strict';

    var urlBase = "/api";
    var authHeader = 'authorization';

    function getHost(url) {
        var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
        return m ? m[1] : null;
    }

    var urlBaseHost = getHost(urlBase) || location.host;

    /**
     * @ngdoc overview
     * @name apiServices
     * @module
     * @description
     *
     * The `apiServices` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module("apiServices", ['ngResource']);

    /**
     * @ngdoc object
     * @name apiServices.Badge
     * @header apiServices.Badge
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Badge` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Badge",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Badges/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Badge.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/Badges/:id/product",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#create
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Badges",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#createMany
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Badges",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#upsert
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Badges",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#exists
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Badges/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#findById
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Badges/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#find
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Badges",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#findOne
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Badges/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#updateAll
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Badges/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#deleteById
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Badges/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#count
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Badges/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#prototype$updateAttributes
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Badge` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Badges/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Badge#createChangeStream
                     * @methodOf apiServices.Badge
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Badges/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Badge#updateOrCreate
             * @methodOf apiServices.Badge
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Badge` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Badge#update
             * @methodOf apiServices.Badge
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Badge#destroyById
             * @methodOf apiServices.Badge
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Badge` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Badge#removeById
             * @methodOf apiServices.Badge
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Badge` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Badge#modelName
             * @propertyOf apiServices.Badge
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Badge`.
             */
            R.modelName = "Badge";


            /**
             * @ngdoc method
             * @name apiServices.Badge#product
             * @methodOf apiServices.Badge
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Badge::product"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Customer
     * @header apiServices.Customer
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Customer` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Customer",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Customers/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__findById__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/accessTokens/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__destroyById__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/accessTokens/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__updateById__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/accessTokens/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Customer.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/Customers/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.findById() instead.
                    "prototype$__findById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.destroyById() instead.
                    "prototype$__destroyById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.updateById() instead.
                    "prototype$__updateById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__get__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Queries accessTokens of Customer.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `filter` â€“ `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        isArray: true,
                        url: urlBase + "/Customers/:id/accessTokens",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__create__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/Customers/:id/accessTokens",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__delete__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/Customers/:id/accessTokens",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$__count__accessTokens
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Counts accessTokens of Customer.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/Customers/:id/accessTokens/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries() instead.
                    "prototype$__get__scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.create() instead.
                    "prototype$__create__scoreUnitSummaries": {
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.destroyAll() instead.
                    "prototype$__delete__scoreUnitSummaries": {
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.count() instead.
                    "prototype$__count__scoreUnitSummaries": {
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#create
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Customers",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#createMany
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Customers",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#upsert
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Customers",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#exists
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Customers/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#findById
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Customers/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#find
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Customers",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#findOne
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Customers/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#updateAll
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Customers/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#deleteById
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Customers/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#count
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Customers/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#prototype$updateAttributes
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Customer` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Customers/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#createChangeStream
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Customers/change-stream",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#login
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` â€“ `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *   Default value: `user`.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     *
                     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
                     *
                     *
                     */
                    "login": {
                        params: {
                            include: "user"
                        },
                        interceptor: {
                            response: function(response) {
                                var accessToken = response.data;
                                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Customers/login",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#logout
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Logout a user with access token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` â€“ `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.clearUser();
                                LoopBackAuth.clearStorage();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Customers/logout",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#confirm
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` â€“ `{string}` -
                     *
                     *  - `token` â€“ `{string}` -
                     *
                     *  - `redirect` â€“ `{string=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/Customers/confirm",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#resetPassword
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Reset password for a user with email.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/Customers/reset",
                        method: "POST"
                    },

                    // INTERNAL. Use Event.customer() instead.
                    "::get::Event::customer": {
                        url: urlBase + "/Events/:id/customer",
                        method: "GET"
                    },

                    // INTERNAL. Use RuleInstance.customer() instead.
                    "::get::RuleInstance::customer": {
                        url: urlBase + "/RuleInstances/:id/customer",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.customer() instead.
                    "::get::ScoreUnitSeat::customer": {
                        url: urlBase + "/ScoreUnitSeats/:id/customer",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSummary.customer() instead.
                    "::get::ScoreUnitSummary::customer": {
                        url: urlBase + "/ScoreUnitSummaries/:id/customer",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Customer#getCurrent
                     * @methodOf apiServices.Customer
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {function(Object,Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/Customers" + "/:id",
                        method: "GET",
                        params: {
                            id: function() {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            },
                        },
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.currentUserData = response.data;
                                return response.resource;
                            }
                        },
                        __isGetCurrentUser__ : true
                    }
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Customer#updateOrCreate
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Customer#update
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Customer#destroyById
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Customer#removeById
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Customer#getCachedCurrent
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Get data of the currently logged user that was returned by the last
             * call to {@link apiServices.Customer#login} or
             * {@link apiServices.Customer#getCurrent}. Return null when there
             * is no user logged in or the data of the current user were not fetched
             * yet.
             *
             * @returns {Object} A Customer instance.
             */
            R.getCachedCurrent = function() {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer#isAuthenticated
             * @methodOf apiServices.Customer
             *
             * @returns {boolean} True if the current user is authenticated (logged in).
             */
            R.isAuthenticated = function() {
                return this.getCurrentId() != null;
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer#getCurrentId
             * @methodOf apiServices.Customer
             *
             * @returns {Object} Id of the currently logged-in user or null.
             */
            R.getCurrentId = function() {
                return LoopBackAuth.currentUserId;
            };

            /**
             * @ngdoc property
             * @name apiServices.Customer#modelName
             * @propertyOf apiServices.Customer
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Customer`.
             */
            R.modelName = "Customer";


            /**
             * @ngdoc method
             * @name apiServices.Customer#product
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Customer::product"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Customer.scoreUnitSummaries
             * @header apiServices.Customer.scoreUnitSummaries
             * @object
             * @description
             *
             * The object `Customer.scoreUnitSummaries` groups methods
             * manipulating `ScoreUnitSummary` instances related to `Customer`.
             *
             * Call {@link apiServices.Customer#scoreUnitSummaries Customer.scoreUnitSummaries()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Customer#scoreUnitSummaries
             * @methodOf apiServices.Customer
             *
             * @description
             *
             * Queries scoreUnitSummaries of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::get::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#count
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Counts scoreUnitSummaries of Customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.scoreUnitSummaries.count = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::count::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#create
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Creates a new instance in scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.create = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::create::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#createMany
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Creates a new instance in scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.createMany = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::createMany::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#destroyAll
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Deletes all scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnitSummaries.destroyAll = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::delete::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#destroyById
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Delete a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnitSummaries.destroyById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::destroyById::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#findById
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Find a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.findById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::findById::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Customer.scoreUnitSummaries#updateById
             * @methodOf apiServices.Customer.scoreUnitSummaries
             *
             * @description
             *
             * Update a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.updateById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::updateById::Customer::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Admin
     * @header apiServices.Admin
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Admin` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Admin",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Admins/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__findById__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/accessTokens/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__destroyById__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/accessTokens/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__updateById__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/accessTokens/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Admin.products.findById() instead.
                    "prototype$__findById__products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.products.destroyById() instead.
                    "prototype$__destroyById__products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.products.updateById() instead.
                    "prototype$__updateById__products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Admin.products.link() instead.
                    "prototype$__link__products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/rel/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Admin.products.unlink() instead.
                    "prototype$__unlink__products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/rel/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.products.exists() instead.
                    "prototype$__exists__products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/rel/:fk",
                        method: "HEAD"
                    },

                    // INTERNAL. Use Admin.productAccesses.findById() instead.
                    "prototype$__findById__productAccesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/productAccesses/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.productAccesses.destroyById() instead.
                    "prototype$__destroyById__productAccesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/productAccesses/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.productAccesses.updateById() instead.
                    "prototype$__updateById__productAccesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/productAccesses/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__get__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Queries accessTokens of Admin.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `filter` â€“ `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/accessTokens",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__create__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/Admins/:id/accessTokens",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__delete__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/Admins/:id/accessTokens",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$__count__accessTokens
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Counts accessTokens of Admin.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/Admins/:id/accessTokens/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.products() instead.
                    "prototype$__get__products": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/products",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.products.create() instead.
                    "prototype$__create__products": {
                        url: urlBase + "/Admins/:id/products",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.products.destroyAll() instead.
                    "prototype$__delete__products": {
                        url: urlBase + "/Admins/:id/products",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.products.count() instead.
                    "prototype$__count__products": {
                        url: urlBase + "/Admins/:id/products/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.productAccesses() instead.
                    "prototype$__get__productAccesses": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.productAccesses.create() instead.
                    "prototype$__create__productAccesses": {
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.productAccesses.destroyAll() instead.
                    "prototype$__delete__productAccesses": {
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.productAccesses.count() instead.
                    "prototype$__count__productAccesses": {
                        url: urlBase + "/Admins/:id/productAccesses/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#create
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Admins",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#createMany
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Admins",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#upsert
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Admins",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#exists
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Admins/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#findById
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Admins/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#find
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Admins",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#findOne
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Admins/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#updateAll
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Admins/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#deleteById
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Admins/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#count
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Admins/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#prototype$updateAttributes
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Admin` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Admins/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#createChangeStream
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Admins/change-stream",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#login
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` â€“ `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *   Default value: `user`.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     *
                     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
                     *
                     *
                     */
                    "login": {
                        params: {
                            include: "user"
                        },
                        interceptor: {
                            response: function(response) {
                                var accessToken = response.data;
                                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Admins/login",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#logout
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Logout a user with access token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` â€“ `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.clearUser();
                                LoopBackAuth.clearStorage();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Admins/logout",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#confirm
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` â€“ `{string}` -
                     *
                     *  - `token` â€“ `{string}` -
                     *
                     *  - `redirect` â€“ `{string=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/Admins/confirm",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#resetPassword
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Reset password for a user with email.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/Admins/reset",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.owner() instead.
                    "::get::Product::owner": {
                        url: urlBase + "/Products/:id/owner",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.admins.findById() instead.
                    "::findById::Product::admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.admins.destroyById() instead.
                    "::destroyById::Product::admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.admins.updateById() instead.
                    "::updateById::Product::admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.admins.link() instead.
                    "::link::Product::admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/rel/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.admins.unlink() instead.
                    "::unlink::Product::admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/rel/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.admins.exists() instead.
                    "::exists::Product::admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/rel/:fk",
                        method: "HEAD"
                    },

                    // INTERNAL. Use Product.admins() instead.
                    "::get::Product::admins": {
                        isArray: true,
                        url: urlBase + "/Products/:id/admins",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.admins.create() instead.
                    "::create::Product::admins": {
                        url: urlBase + "/Products/:id/admins",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.admins.createMany() instead.
                    "::createMany::Product::admins": {
                        isArray: true,
                        url: urlBase + "/Products/:id/admins",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.admins.destroyAll() instead.
                    "::delete::Product::admins": {
                        url: urlBase + "/Products/:id/admins",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.admins.count() instead.
                    "::count::Product::admins": {
                        url: urlBase + "/Products/:id/admins/count",
                        method: "GET"
                    },

                    // INTERNAL. Use ProductAccess.admin() instead.
                    "::get::ProductAccess::admin": {
                        url: urlBase + "/ProductAccesses/:id/admin",
                        method: "GET"
                    },

                    // INTERNAL. Use RuleHistory.author() instead.
                    "::get::RuleHistory::author": {
                        url: urlBase + "/RuleHistories/:id/author",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Admin#getCurrent
                     * @methodOf apiServices.Admin
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {function(Object,Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/Admins" + "/:id",
                        method: "GET",
                        params: {
                            id: function() {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            },
                        },
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.currentUserData = response.data;
                                return response.resource;
                            }
                        },
                        __isGetCurrentUser__ : true
                    }
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Admin#updateOrCreate
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Admin#update
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Admin#destroyById
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Admin#removeById
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Admin#getCachedCurrent
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Get data of the currently logged user that was returned by the last
             * call to {@link apiServices.Admin#login} or
             * {@link apiServices.Admin#getCurrent}. Return null when there
             * is no user logged in or the data of the current user were not fetched
             * yet.
             *
             * @returns {Object} A Admin instance.
             */
            R.getCachedCurrent = function() {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin#isAuthenticated
             * @methodOf apiServices.Admin
             *
             * @returns {boolean} True if the current user is authenticated (logged in).
             */
            R.isAuthenticated = function() {
                return this.getCurrentId() != null;
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin#getCurrentId
             * @methodOf apiServices.Admin
             *
             * @returns {Object} Id of the currently logged-in user or null.
             */
            R.getCurrentId = function() {
                return LoopBackAuth.currentUserId;
            };

            /**
             * @ngdoc property
             * @name apiServices.Admin#modelName
             * @propertyOf apiServices.Admin
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Admin`.
             */
            R.modelName = "Admin";

            /**
             * @ngdoc object
             * @name apiServices.Admin.products
             * @header apiServices.Admin.products
             * @object
             * @description
             *
             * The object `Admin.products` groups methods
             * manipulating `Product` instances related to `Admin`.
             *
             * Call {@link apiServices.Admin#products Admin.products()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Admin#products
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Queries products of Admin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#count
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Counts products of Admin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.products.count = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::count::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#create
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products.create = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::create::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#createMany
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Creates a new instance in products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products.createMany = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::createMany::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#destroyAll
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Deletes all products of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.products.destroyAll = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::delete::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#destroyById
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Delete a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.products.destroyById = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::destroyById::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#exists
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Check the existence of products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products.exists = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::exists::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#findById
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Find a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products.findById = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::findById::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#link
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Add a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products.link = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::link::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#unlink
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Remove the products relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for products
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.products.unlink = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::unlink::Admin::products"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.products#updateById
             * @methodOf apiServices.Admin.products
             *
             * @description
             *
             * Update a related item by id for products.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for products
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.products.updateById = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::updateById::Admin::products"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Admin.productAccesses
             * @header apiServices.Admin.productAccesses
             * @object
             * @description
             *
             * The object `Admin.productAccesses` groups methods
             * manipulating `ProductAccess` instances related to `Admin`.
             *
             * Call {@link apiServices.Admin#productAccesses Admin.productAccesses()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Admin#productAccesses
             * @methodOf apiServices.Admin
             *
             * @description
             *
             * Queries productAccesses of Admin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.productAccesses = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::get::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#count
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Counts productAccesses of Admin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.productAccesses.count = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::count::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#create
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Creates a new instance in productAccesses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.productAccesses.create = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::create::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#createMany
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Creates a new instance in productAccesses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.productAccesses.createMany = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::createMany::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#destroyAll
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Deletes all productAccesses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.productAccesses.destroyAll = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::delete::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#destroyById
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Delete a related item by id for productAccesses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for productAccesses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.productAccesses.destroyById = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::destroyById::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#findById
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Find a related item by id for productAccesses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for productAccesses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.productAccesses.findById = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::findById::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Admin.productAccesses#updateById
             * @methodOf apiServices.Admin.productAccesses
             *
             * @description
             *
             * Update a related item by id for productAccesses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - User id
             *
             *  - `fk` â€“ `{*}` - Foreign key for productAccesses
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.productAccesses.updateById = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::updateById::Admin::productAccesses"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Product
     * @header apiServices.Product
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Product` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Product",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Products/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Product.owner() instead.
                    "prototype$__get__owner": {
                        url: urlBase + "/Products/:id/owner",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.accesses.findById() instead.
                    "prototype$__findById__accesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/accesses/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.accesses.destroyById() instead.
                    "prototype$__destroyById__accesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/accesses/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.accesses.updateById() instead.
                    "prototype$__updateById__accesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/accesses/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.admins.findById() instead.
                    "prototype$__findById__admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.admins.destroyById() instead.
                    "prototype$__destroyById__admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.admins.updateById() instead.
                    "prototype$__updateById__admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.admins.link() instead.
                    "prototype$__link__admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/rel/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.admins.unlink() instead.
                    "prototype$__unlink__admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/rel/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.admins.exists() instead.
                    "prototype$__exists__admins": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/admins/rel/:fk",
                        method: "HEAD"
                    },

                    // INTERNAL. Use Product.scoreUnit.findById() instead.
                    "prototype$__findById__scoreUnit": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/scoreUnit/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.scoreUnit.destroyById() instead.
                    "prototype$__destroyById__scoreUnit": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/scoreUnit/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.scoreUnit.updateById() instead.
                    "prototype$__updateById__scoreUnit": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/scoreUnit/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.accesses() instead.
                    "prototype$__get__accesses": {
                        isArray: true,
                        url: urlBase + "/Products/:id/accesses",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.accesses.create() instead.
                    "prototype$__create__accesses": {
                        url: urlBase + "/Products/:id/accesses",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.accesses.destroyAll() instead.
                    "prototype$__delete__accesses": {
                        url: urlBase + "/Products/:id/accesses",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.accesses.count() instead.
                    "prototype$__count__accesses": {
                        url: urlBase + "/Products/:id/accesses/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.admins() instead.
                    "prototype$__get__admins": {
                        isArray: true,
                        url: urlBase + "/Products/:id/admins",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.admins.create() instead.
                    "prototype$__create__admins": {
                        url: urlBase + "/Products/:id/admins",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.admins.destroyAll() instead.
                    "prototype$__delete__admins": {
                        url: urlBase + "/Products/:id/admins",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.admins.count() instead.
                    "prototype$__count__admins": {
                        url: urlBase + "/Products/:id/admins/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.scoreUnit() instead.
                    "prototype$__get__scoreUnit": {
                        isArray: true,
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.scoreUnit.create() instead.
                    "prototype$__create__scoreUnit": {
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.scoreUnit.destroyAll() instead.
                    "prototype$__delete__scoreUnit": {
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.scoreUnit.count() instead.
                    "prototype$__count__scoreUnit": {
                        url: urlBase + "/Products/:id/scoreUnit/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#create
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Products",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#createMany
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Products",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#upsert
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Products",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#exists
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Products/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#findById
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Products/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#find
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Products",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#findOne
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Products/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#updateAll
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Products/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#deleteById
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Products/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#count
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Products/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#prototype$updateAttributes
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Product` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Products/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Product#createChangeStream
                     * @methodOf apiServices.Product
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Products/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use Badge.product() instead.
                    "::get::Badge::product": {
                        url: urlBase + "/Badges/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.product() instead.
                    "::get::Customer::product": {
                        url: urlBase + "/Customers/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.products.findById() instead.
                    "::findById::Admin::products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.products.destroyById() instead.
                    "::destroyById::Admin::products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.products.updateById() instead.
                    "::updateById::Admin::products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Admin.products.link() instead.
                    "::link::Admin::products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/rel/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Admin.products.unlink() instead.
                    "::unlink::Admin::products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/rel/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.products.exists() instead.
                    "::exists::Admin::products": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/products/rel/:fk",
                        method: "HEAD"
                    },

                    // INTERNAL. Use Admin.products() instead.
                    "::get::Admin::products": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/products",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.products.create() instead.
                    "::create::Admin::products": {
                        url: urlBase + "/Admins/:id/products",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.products.createMany() instead.
                    "::createMany::Admin::products": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/products",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.products.destroyAll() instead.
                    "::delete::Admin::products": {
                        url: urlBase + "/Admins/:id/products",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.products.count() instead.
                    "::count::Admin::products": {
                        url: urlBase + "/Admins/:id/products/count",
                        method: "GET"
                    },

                    // INTERNAL. Use ProductAccess.product() instead.
                    "::get::ProductAccess::product": {
                        url: urlBase + "/ProductAccesses/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Gameplay.product() instead.
                    "::get::Gameplay::product": {
                        url: urlBase + "/Gameplays/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Good.product() instead.
                    "::get::Good::product": {
                        url: urlBase + "/Goods/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Ranking.product() instead.
                    "::get::Ranking::product": {
                        url: urlBase + "/Rankings/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnit.product() instead.
                    "::get::ScoreUnit::product": {
                        url: urlBase + "/ScoreUnits/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Segment.product() instead.
                    "::get::Segment::product": {
                        url: urlBase + "/Segments/:id/product",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Product#updateOrCreate
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Product#update
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Product#destroyById
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Product#removeById
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Product#modelName
             * @propertyOf apiServices.Product
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Product`.
             */
            R.modelName = "Product";


            /**
             * @ngdoc method
             * @name apiServices.Product#owner
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Fetches belongsTo relation owner.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.owner = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::get::Product::owner"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Product.accesses
             * @header apiServices.Product.accesses
             * @object
             * @description
             *
             * The object `Product.accesses` groups methods
             * manipulating `ProductAccess` instances related to `Product`.
             *
             * Call {@link apiServices.Product#accesses Product.accesses()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Product#accesses
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Queries accesses of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.accesses = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::get::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#count
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Counts accesses of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.accesses.count = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::count::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#create
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Creates a new instance in accesses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.accesses.create = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::create::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#createMany
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Creates a new instance in accesses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.accesses.createMany = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::createMany::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#destroyAll
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Deletes all accesses of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.accesses.destroyAll = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::delete::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#destroyById
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Delete a related item by id for accesses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for accesses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.accesses.destroyById = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::destroyById::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#findById
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Find a related item by id for accesses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for accesses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.accesses.findById = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::findById::Product::accesses"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.accesses#updateById
             * @methodOf apiServices.Product.accesses
             *
             * @description
             *
             * Update a related item by id for accesses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for accesses
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R.accesses.updateById = function() {
                var TargetResource = $injector.get("ProductAccess");
                var action = TargetResource["::updateById::Product::accesses"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Product.admins
             * @header apiServices.Product.admins
             * @object
             * @description
             *
             * The object `Product.admins` groups methods
             * manipulating `Admin` instances related to `Product`.
             *
             * Call {@link apiServices.Product#admins Product.admins()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Product#admins
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Queries admins of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::get::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#count
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Counts admins of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.admins.count = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::count::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#create
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Creates a new instance in admins of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins.create = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::create::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#createMany
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Creates a new instance in admins of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins.createMany = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::createMany::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#destroyAll
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Deletes all admins of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.admins.destroyAll = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::delete::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#destroyById
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Delete a related item by id for admins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for admins
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.admins.destroyById = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::destroyById::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#exists
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Check the existence of admins relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for admins
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins.exists = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::exists::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#findById
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Find a related item by id for admins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for admins
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins.findById = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::findById::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#link
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Add a related item by id for admins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for admins
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins.link = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::link::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#unlink
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Remove the admins relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for admins
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.admins.unlink = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::unlink::Product::admins"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.admins#updateById
             * @methodOf apiServices.Product.admins
             *
             * @description
             *
             * Update a related item by id for admins.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for admins
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admins.updateById = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::updateById::Product::admins"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Product.scoreUnit
             * @header apiServices.Product.scoreUnit
             * @object
             * @description
             *
             * The object `Product.scoreUnit` groups methods
             * manipulating `ScoreUnit` instances related to `Product`.
             *
             * Call {@link apiServices.Product#scoreUnit Product.scoreUnit()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Product#scoreUnit
             * @methodOf apiServices.Product
             *
             * @description
             *
             * Queries scoreUnit of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::get::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#count
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Counts scoreUnit of Product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.scoreUnit.count = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::count::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#create
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Creates a new instance in scoreUnit of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit.create = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::create::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#createMany
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Creates a new instance in scoreUnit of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit.createMany = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::createMany::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#destroyAll
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Deletes all scoreUnit of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnit.destroyAll = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::delete::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#destroyById
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Delete a related item by id for scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnit.destroyById = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::destroyById::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#findById
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Find a related item by id for scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit.findById = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::findById::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Product.scoreUnit#updateById
             * @methodOf apiServices.Product.scoreUnit
             *
             * @description
             *
             * Update a related item by id for scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnit
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit.updateById = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::updateById::Product::scoreUnit"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.ProductAccess
     * @header apiServices.ProductAccess
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `ProductAccess` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "ProductAccess",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/ProductAccesses/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use ProductAccess.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/ProductAccesses/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use ProductAccess.admin() instead.
                    "prototype$__get__admin": {
                        url: urlBase + "/ProductAccesses/:id/admin",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#prototype$__get__role
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Fetches belongsTo relation role.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `refresh` â€“ `{boolean=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "prototype$__get__role": {
                        url: urlBase + "/ProductAccesses/:id/role",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#create
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/ProductAccesses",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#createMany
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/ProductAccesses",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#upsert
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/ProductAccesses",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#exists
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/ProductAccesses/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#findById
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/ProductAccesses/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#find
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/ProductAccesses",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#findOne
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/ProductAccesses/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#updateAll
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/ProductAccesses/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#deleteById
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/ProductAccesses/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#count
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/ProductAccesses/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#prototype$updateAttributes
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ProductAccess` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/ProductAccesses/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ProductAccess#createChangeStream
                     * @methodOf apiServices.ProductAccess
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/ProductAccesses/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.productAccesses.findById() instead.
                    "::findById::Admin::productAccesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/productAccesses/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.productAccesses.destroyById() instead.
                    "::destroyById::Admin::productAccesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/productAccesses/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.productAccesses.updateById() instead.
                    "::updateById::Admin::productAccesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Admins/:id/productAccesses/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Admin.productAccesses() instead.
                    "::get::Admin::productAccesses": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "GET"
                    },

                    // INTERNAL. Use Admin.productAccesses.create() instead.
                    "::create::Admin::productAccesses": {
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.productAccesses.createMany() instead.
                    "::createMany::Admin::productAccesses": {
                        isArray: true,
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "POST"
                    },

                    // INTERNAL. Use Admin.productAccesses.destroyAll() instead.
                    "::delete::Admin::productAccesses": {
                        url: urlBase + "/Admins/:id/productAccesses",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Admin.productAccesses.count() instead.
                    "::count::Admin::productAccesses": {
                        url: urlBase + "/Admins/:id/productAccesses/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.accesses.findById() instead.
                    "::findById::Product::accesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/accesses/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.accesses.destroyById() instead.
                    "::destroyById::Product::accesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/accesses/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.accesses.updateById() instead.
                    "::updateById::Product::accesses": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/accesses/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.accesses() instead.
                    "::get::Product::accesses": {
                        isArray: true,
                        url: urlBase + "/Products/:id/accesses",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.accesses.create() instead.
                    "::create::Product::accesses": {
                        url: urlBase + "/Products/:id/accesses",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.accesses.createMany() instead.
                    "::createMany::Product::accesses": {
                        isArray: true,
                        url: urlBase + "/Products/:id/accesses",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.accesses.destroyAll() instead.
                    "::delete::Product::accesses": {
                        url: urlBase + "/Products/:id/accesses",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.accesses.count() instead.
                    "::count::Product::accesses": {
                        url: urlBase + "/Products/:id/accesses/count",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.ProductAccess#updateOrCreate
             * @methodOf apiServices.ProductAccess
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.ProductAccess#update
             * @methodOf apiServices.ProductAccess
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.ProductAccess#destroyById
             * @methodOf apiServices.ProductAccess
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.ProductAccess#removeById
             * @methodOf apiServices.ProductAccess
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ProductAccess` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.ProductAccess#modelName
             * @propertyOf apiServices.ProductAccess
             * @description
             * The name of the model represented by this $resource,
             * i.e. `ProductAccess`.
             */
            R.modelName = "ProductAccess";


            /**
             * @ngdoc method
             * @name apiServices.ProductAccess#product
             * @methodOf apiServices.ProductAccess
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::ProductAccess::product"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ProductAccess#admin
             * @methodOf apiServices.ProductAccess
             *
             * @description
             *
             * Fetches belongsTo relation admin.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.admin = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::get::ProductAccess::admin"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Event
     * @header apiServices.Event
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Event` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Event",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Events/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Event.customer() instead.
                    "prototype$__get__customer": {
                        url: urlBase + "/Events/:id/customer",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#create
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Events",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#createMany
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Events",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#upsert
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Events",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#exists
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Events/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#findById
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Events/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#find
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Events",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#findOne
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Events/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#updateAll
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Events/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#deleteById
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Events/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#count
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Events/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#prototype$updateAttributes
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Event` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Events/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Event#createChangeStream
                     * @methodOf apiServices.Event
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Events/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Event#updateOrCreate
             * @methodOf apiServices.Event
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Event#update
             * @methodOf apiServices.Event
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Event#destroyById
             * @methodOf apiServices.Event
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Event#removeById
             * @methodOf apiServices.Event
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Event` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Event#modelName
             * @propertyOf apiServices.Event
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Event`.
             */
            R.modelName = "Event";


            /**
             * @ngdoc method
             * @name apiServices.Event#customer
             * @methodOf apiServices.Event
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R.customer = function() {
                var TargetResource = $injector.get("Customer");
                var action = TargetResource["::get::Event::customer"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Gameplay
     * @header apiServices.Gameplay
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Gameplay` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Gameplay",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Gameplays/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Gameplay.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/Gameplays/:id/product",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#create
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Gameplays",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#createMany
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Gameplays",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#upsert
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Gameplays",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#exists
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Gameplays/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#findById
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Gameplays/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#find
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Gameplays",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#findOne
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Gameplays/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#updateAll
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Gameplays/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#deleteById
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Gameplays/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#count
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Gameplays/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#prototype$updateAttributes
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Gameplay` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Gameplays/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Gameplay#createChangeStream
                     * @methodOf apiServices.Gameplay
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Gameplays/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Gameplay#updateOrCreate
             * @methodOf apiServices.Gameplay
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gameplay` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Gameplay#update
             * @methodOf apiServices.Gameplay
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Gameplay#destroyById
             * @methodOf apiServices.Gameplay
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gameplay` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Gameplay#removeById
             * @methodOf apiServices.Gameplay
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Gameplay` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Gameplay#modelName
             * @propertyOf apiServices.Gameplay
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Gameplay`.
             */
            R.modelName = "Gameplay";


            /**
             * @ngdoc method
             * @name apiServices.Gameplay#product
             * @methodOf apiServices.Gameplay
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Gameplay::product"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Good
     * @header apiServices.Good
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Good` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Good",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Goods/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Good.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/Goods/:id/product",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#create
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Goods",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#createMany
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Goods",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#upsert
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Goods",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#exists
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Goods/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#findById
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Goods/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#find
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Goods",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#findOne
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Goods/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#updateAll
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Goods/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#deleteById
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Goods/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#count
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Goods/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#prototype$updateAttributes
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Good` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Goods/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Good#createChangeStream
                     * @methodOf apiServices.Good
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Goods/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Good#updateOrCreate
             * @methodOf apiServices.Good
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Good` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Good#update
             * @methodOf apiServices.Good
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Good#destroyById
             * @methodOf apiServices.Good
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Good` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Good#removeById
             * @methodOf apiServices.Good
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Good` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Good#modelName
             * @propertyOf apiServices.Good
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Good`.
             */
            R.modelName = "Good";


            /**
             * @ngdoc method
             * @name apiServices.Good#product
             * @methodOf apiServices.Good
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Good::product"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Level
     * @header apiServices.Level
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Level` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Level",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Levels/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Level.prev() instead.
                    "prototype$__get__prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.prev.create() instead.
                    "prototype$__create__prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.prev.update() instead.
                    "prototype$__update__prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "PUT"
                    },

                    // INTERNAL. Use Level.prev.destroy() instead.
                    "prototype$__destroy__prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.next() instead.
                    "prototype$__get__next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.next.create() instead.
                    "prototype$__create__next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.next.update() instead.
                    "prototype$__update__next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "PUT"
                    },

                    // INTERNAL. Use Level.next.destroy() instead.
                    "prototype$__destroy__next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.scoreUnit() instead.
                    "prototype$__get__scoreUnit": {
                        url: urlBase + "/Levels/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.findById() instead.
                    "prototype$__findById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.destroyById() instead.
                    "prototype$__destroyById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.updateById() instead.
                    "prototype$__updateById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries() instead.
                    "prototype$__get__scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.create() instead.
                    "prototype$__create__scoreUnitSummaries": {
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.destroyAll() instead.
                    "prototype$__delete__scoreUnitSummaries": {
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.count() instead.
                    "prototype$__count__scoreUnitSummaries": {
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#create
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Levels",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#createMany
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Levels",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#upsert
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Levels",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#exists
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Levels/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#findById
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Levels/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#find
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Levels",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#findOne
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Levels/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#updateAll
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Levels/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#deleteById
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Levels/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#count
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Levels/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#prototype$updateAttributes
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Level` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Levels/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Level#createChangeStream
                     * @methodOf apiServices.Level
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Levels/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.prev() instead.
                    "::get::Level::prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.prev.create() instead.
                    "::create::Level::prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.prev.createMany() instead.
                    "::createMany::Level::prev": {
                        isArray: true,
                        url: urlBase + "/Levels/:id/prev",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.prev.update() instead.
                    "::update::Level::prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "PUT"
                    },

                    // INTERNAL. Use Level.prev.destroy() instead.
                    "::destroy::Level::prev": {
                        url: urlBase + "/Levels/:id/prev",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.next() instead.
                    "::get::Level::next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.next.create() instead.
                    "::create::Level::next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.next.createMany() instead.
                    "::createMany::Level::next": {
                        isArray: true,
                        url: urlBase + "/Levels/:id/next",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.next.update() instead.
                    "::update::Level::next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "PUT"
                    },

                    // INTERNAL. Use Level.next.destroy() instead.
                    "::destroy::Level::next": {
                        url: urlBase + "/Levels/:id/next",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnit.levels.findById() instead.
                    "::findById::ScoreUnit::levels": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnits/:id/levels/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnit.levels.destroyById() instead.
                    "::destroyById::ScoreUnit::levels": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnits/:id/levels/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnit.levels.updateById() instead.
                    "::updateById::ScoreUnit::levels": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnits/:id/levels/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use ScoreUnit.levels() instead.
                    "::get::ScoreUnit::levels": {
                        isArray: true,
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnit.levels.create() instead.
                    "::create::ScoreUnit::levels": {
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnit.levels.createMany() instead.
                    "::createMany::ScoreUnit::levels": {
                        isArray: true,
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnit.levels.destroyAll() instead.
                    "::delete::ScoreUnit::levels": {
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnit.levels.count() instead.
                    "::count::ScoreUnit::levels": {
                        url: urlBase + "/ScoreUnits/:id/levels/count",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSummary.level() instead.
                    "::get::ScoreUnitSummary::level": {
                        url: urlBase + "/ScoreUnitSummaries/:id/level",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Level#updateOrCreate
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Level#update
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Level#destroyById
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Level#removeById
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Level#modelName
             * @propertyOf apiServices.Level
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Level`.
             */
            R.modelName = "Level";

            /**
             * @ngdoc object
             * @name apiServices.Level.prev
             * @header apiServices.Level.prev
             * @object
             * @description
             *
             * The object `Level.prev` groups methods
             * manipulating `Level` instances related to `Level`.
             *
             * Call {@link apiServices.Level#prev Level.prev()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Level#prev
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Fetches hasOne relation prev.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.prev = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::get::Level::prev"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.prev#create
             * @methodOf apiServices.Level.prev
             *
             * @description
             *
             * Creates a new instance in prev of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.prev.create = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::create::Level::prev"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.prev#createMany
             * @methodOf apiServices.Level.prev
             *
             * @description
             *
             * Creates a new instance in prev of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.prev.createMany = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::createMany::Level::prev"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.prev#destroy
             * @methodOf apiServices.Level.prev
             *
             * @description
             *
             * Deletes prev of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.prev.destroy = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::destroy::Level::prev"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.prev#update
             * @methodOf apiServices.Level.prev
             *
             * @description
             *
             * Update prev of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.prev.update = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::update::Level::prev"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Level.next
             * @header apiServices.Level.next
             * @object
             * @description
             *
             * The object `Level.next` groups methods
             * manipulating `Level` instances related to `Level`.
             *
             * Call {@link apiServices.Level#next Level.next()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Level#next
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Fetches hasOne relation next.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.next = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::get::Level::next"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.next#create
             * @methodOf apiServices.Level.next
             *
             * @description
             *
             * Creates a new instance in next of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.next.create = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::create::Level::next"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.next#createMany
             * @methodOf apiServices.Level.next
             *
             * @description
             *
             * Creates a new instance in next of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.next.createMany = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::createMany::Level::next"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.next#destroy
             * @methodOf apiServices.Level.next
             *
             * @description
             *
             * Deletes next of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.next.destroy = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::destroy::Level::next"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.next#update
             * @methodOf apiServices.Level.next
             *
             * @description
             *
             * Update next of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.next.update = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::update::Level::next"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level#scoreUnit
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Fetches belongsTo relation scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::get::Level::scoreUnit"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.Level.scoreUnitSummaries
             * @header apiServices.Level.scoreUnitSummaries
             * @object
             * @description
             *
             * The object `Level.scoreUnitSummaries` groups methods
             * manipulating `ScoreUnitSummary` instances related to `Level`.
             *
             * Call {@link apiServices.Level#scoreUnitSummaries Level.scoreUnitSummaries()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.Level#scoreUnitSummaries
             * @methodOf apiServices.Level
             *
             * @description
             *
             * Queries scoreUnitSummaries of Level.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::get::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#count
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Counts scoreUnitSummaries of Level.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.scoreUnitSummaries.count = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::count::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#create
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Creates a new instance in scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.create = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::create::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#createMany
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Creates a new instance in scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.createMany = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::createMany::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#destroyAll
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Deletes all scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnitSummaries.destroyAll = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::delete::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#destroyById
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Delete a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnitSummaries.destroyById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::destroyById::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#findById
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Find a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.findById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::findById::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Level.scoreUnitSummaries#updateById
             * @methodOf apiServices.Level.scoreUnitSummaries
             *
             * @description
             *
             * Update a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.updateById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::updateById::Level::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Ranking
     * @header apiServices.Ranking
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Ranking` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Ranking",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Rankings/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Ranking.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/Rankings/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use Ranking.scoreUnit() instead.
                    "prototype$__get__scoreUnit": {
                        url: urlBase + "/Rankings/:id/scoreUnit",
                        method: "GET"
                    },
                }
            );




            /**
             * @ngdoc property
             * @name apiServices.Ranking#modelName
             * @propertyOf apiServices.Ranking
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Ranking`.
             */
            R.modelName = "Ranking";


            /**
             * @ngdoc method
             * @name apiServices.Ranking#product
             * @methodOf apiServices.Ranking
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Ranking::product"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.Ranking#scoreUnit
             * @methodOf apiServices.Ranking
             *
             * @description
             *
             * Fetches belongsTo relation scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::get::Ranking::scoreUnit"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Rule
     * @header apiServices.Rule
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Rule` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Rule",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Rules/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#create
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Rules",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#createMany
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Rules",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#upsert
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Rules",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#exists
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Rules/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#findById
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Rules/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#find
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Rules",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#findOne
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Rules/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#updateAll
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Rules/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#deleteById
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Rules/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#count
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Rules/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#prototype$updateAttributes
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Rule` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Rules/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Rule#createChangeStream
                     * @methodOf apiServices.Rule
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Rules/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use RuleInstance.Rule() instead.
                    "::get::RuleInstance::Rule": {
                        url: urlBase + "/RuleInstances/:id/Rule",
                        method: "GET"
                    },

                    // INTERNAL. Use RuleHistory.rule() instead.
                    "::get::RuleHistory::rule": {
                        url: urlBase + "/RuleHistories/:id/rule",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Rule#updateOrCreate
             * @methodOf apiServices.Rule
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rule` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Rule#update
             * @methodOf apiServices.Rule
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Rule#destroyById
             * @methodOf apiServices.Rule
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rule` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Rule#removeById
             * @methodOf apiServices.Rule
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rule` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Rule#modelName
             * @propertyOf apiServices.Rule
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Rule`.
             */
            R.modelName = "Rule";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.RuleInstance
     * @header apiServices.RuleInstance
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `RuleInstance` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "RuleInstance",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/RuleInstances/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__findById__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Find a related item by id for listeners.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for listeners
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$__findById__listeners": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/RuleInstances/:id/listeners/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__destroyById__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Delete a related item by id for listeners.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for listeners
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__listeners": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/RuleInstances/:id/listeners/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__updateById__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Update a related item by id for listeners.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for listeners
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$__updateById__listeners": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/RuleInstances/:id/listeners/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__link__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Add a related item by id for listeners.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for listeners
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$__link__listeners": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/RuleInstances/:id/listeners/rel/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__unlink__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Remove the listeners relation to an item by id.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for listeners
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__unlink__listeners": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/RuleInstances/:id/listeners/rel/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__exists__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Check the existence of listeners relation to an item by id.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `fk` â€“ `{*}` - Foreign key for listeners
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$__exists__listeners": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/RuleInstances/:id/listeners/rel/:fk",
                        method: "HEAD"
                    },

                    // INTERNAL. Use RuleInstance.customer() instead.
                    "prototype$__get__customer": {
                        url: urlBase + "/RuleInstances/:id/customer",
                        method: "GET"
                    },

                    // INTERNAL. Use RuleInstance.Rule() instead.
                    "prototype$__get__Rule": {
                        url: urlBase + "/RuleInstances/:id/Rule",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__get__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Queries listeners of RuleInstance.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `filter` â€“ `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$__get__listeners": {
                        isArray: true,
                        url: urlBase + "/RuleInstances/:id/listeners",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__create__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Creates a new instance in listeners of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$__create__listeners": {
                        url: urlBase + "/RuleInstances/:id/listeners",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__delete__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Deletes all listeners of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__listeners": {
                        url: urlBase + "/RuleInstances/:id/listeners",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$__count__listeners
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Counts listeners of RuleInstance.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "prototype$__count__listeners": {
                        url: urlBase + "/RuleInstances/:id/listeners/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#create
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/RuleInstances",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#createMany
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/RuleInstances",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#upsert
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/RuleInstances",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#exists
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/RuleInstances/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#findById
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/RuleInstances/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#find
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/RuleInstances",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#findOne
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/RuleInstances/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#updateAll
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/RuleInstances/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#deleteById
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/RuleInstances/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#count
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/RuleInstances/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#prototype$updateAttributes
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleInstance` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/RuleInstances/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleInstance#createChangeStream
                     * @methodOf apiServices.RuleInstance
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/RuleInstances/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.RuleInstance#updateOrCreate
             * @methodOf apiServices.RuleInstance
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RuleInstance` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.RuleInstance#update
             * @methodOf apiServices.RuleInstance
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.RuleInstance#destroyById
             * @methodOf apiServices.RuleInstance
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RuleInstance` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.RuleInstance#removeById
             * @methodOf apiServices.RuleInstance
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RuleInstance` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.RuleInstance#modelName
             * @propertyOf apiServices.RuleInstance
             * @description
             * The name of the model represented by this $resource,
             * i.e. `RuleInstance`.
             */
            R.modelName = "RuleInstance";


            /**
             * @ngdoc method
             * @name apiServices.RuleInstance#customer
             * @methodOf apiServices.RuleInstance
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R.customer = function() {
                var TargetResource = $injector.get("Customer");
                var action = TargetResource["::get::RuleInstance::customer"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.RuleInstance#Rule
             * @methodOf apiServices.RuleInstance
             *
             * @description
             *
             * Fetches belongsTo relation Rule.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rule` object.)
             * </em>
             */
            R.Rule = function() {
                var TargetResource = $injector.get("Rule");
                var action = TargetResource["::get::RuleInstance::Rule"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.RuleHistory
     * @header apiServices.RuleHistory
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `RuleHistory` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "RuleHistory",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/RuleHistories/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use RuleHistory.author() instead.
                    "prototype$__get__author": {
                        url: urlBase + "/RuleHistories/:id/author",
                        method: "GET"
                    },

                    // INTERNAL. Use RuleHistory.rule() instead.
                    "prototype$__get__rule": {
                        url: urlBase + "/RuleHistories/:id/rule",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#create
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/RuleHistories",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#createMany
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/RuleHistories",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#upsert
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/RuleHistories",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#exists
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/RuleHistories/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#findById
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/RuleHistories/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#find
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/RuleHistories",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#findOne
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/RuleHistories/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#updateAll
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/RuleHistories/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#deleteById
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/RuleHistories/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#count
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/RuleHistories/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#prototype$updateAttributes
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `RuleHistory` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/RuleHistories/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.RuleHistory#createChangeStream
                     * @methodOf apiServices.RuleHistory
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/RuleHistories/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.RuleHistory#updateOrCreate
             * @methodOf apiServices.RuleHistory
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RuleHistory` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.RuleHistory#update
             * @methodOf apiServices.RuleHistory
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.RuleHistory#destroyById
             * @methodOf apiServices.RuleHistory
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RuleHistory` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.RuleHistory#removeById
             * @methodOf apiServices.RuleHistory
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `RuleHistory` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.RuleHistory#modelName
             * @propertyOf apiServices.RuleHistory
             * @description
             * The name of the model represented by this $resource,
             * i.e. `RuleHistory`.
             */
            R.modelName = "RuleHistory";


            /**
             * @ngdoc method
             * @name apiServices.RuleHistory#author
             * @methodOf apiServices.RuleHistory
             *
             * @description
             *
             * Fetches belongsTo relation author.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Admin` object.)
             * </em>
             */
            R.author = function() {
                var TargetResource = $injector.get("Admin");
                var action = TargetResource["::get::RuleHistory::author"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.RuleHistory#rule
             * @methodOf apiServices.RuleHistory
             *
             * @description
             *
             * Fetches belongsTo relation rule.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Rule` object.)
             * </em>
             */
            R.rule = function() {
                var TargetResource = $injector.get("Rule");
                var action = TargetResource["::get::RuleHistory::rule"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.ScoreUnit
     * @header apiServices.ScoreUnit
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `ScoreUnit` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "ScoreUnit",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/ScoreUnits/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use ScoreUnit.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/ScoreUnits/:id/product",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnit.levels.findById() instead.
                    "prototype$__findById__levels": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnits/:id/levels/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnit.levels.destroyById() instead.
                    "prototype$__destroyById__levels": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnits/:id/levels/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnit.levels.updateById() instead.
                    "prototype$__updateById__levels": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnits/:id/levels/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use ScoreUnit.levels() instead.
                    "prototype$__get__levels": {
                        isArray: true,
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnit.levels.create() instead.
                    "prototype$__create__levels": {
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnit.levels.destroyAll() instead.
                    "prototype$__delete__levels": {
                        url: urlBase + "/ScoreUnits/:id/levels",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnit.levels.count() instead.
                    "prototype$__count__levels": {
                        url: urlBase + "/ScoreUnits/:id/levels/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#create
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/ScoreUnits",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#createMany
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/ScoreUnits",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#upsert
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/ScoreUnits",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#exists
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/ScoreUnits/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#findById
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/ScoreUnits/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#find
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/ScoreUnits",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#findOne
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/ScoreUnits/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#updateAll
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/ScoreUnits/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#deleteById
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/ScoreUnits/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#count
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/ScoreUnits/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#prototype$updateAttributes
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnit` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/ScoreUnits/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnit#createChangeStream
                     * @methodOf apiServices.ScoreUnit
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/ScoreUnits/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.scoreUnit.findById() instead.
                    "::findById::Product::scoreUnit": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/scoreUnit/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.scoreUnit.destroyById() instead.
                    "::destroyById::Product::scoreUnit": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/scoreUnit/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.scoreUnit.updateById() instead.
                    "::updateById::Product::scoreUnit": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Products/:id/scoreUnit/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Product.scoreUnit() instead.
                    "::get::Product::scoreUnit": {
                        isArray: true,
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use Product.scoreUnit.create() instead.
                    "::create::Product::scoreUnit": {
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.scoreUnit.createMany() instead.
                    "::createMany::Product::scoreUnit": {
                        isArray: true,
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "POST"
                    },

                    // INTERNAL. Use Product.scoreUnit.destroyAll() instead.
                    "::delete::Product::scoreUnit": {
                        url: urlBase + "/Products/:id/scoreUnit",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Product.scoreUnit.count() instead.
                    "::count::Product::scoreUnit": {
                        url: urlBase + "/Products/:id/scoreUnit/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnit() instead.
                    "::get::Level::scoreUnit": {
                        url: urlBase + "/Levels/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use Ranking.scoreUnit() instead.
                    "::get::Ranking::scoreUnit": {
                        url: urlBase + "/Rankings/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnit() instead.
                    "::get::ScoreUnitSeat::scoreUnit": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSummary.scoreUnit() instead.
                    "::get::ScoreUnitSummary::scoreUnit": {
                        url: urlBase + "/ScoreUnitSummaries/:id/scoreUnit",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit#updateOrCreate
             * @methodOf apiServices.ScoreUnit
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit#update
             * @methodOf apiServices.ScoreUnit
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit#destroyById
             * @methodOf apiServices.ScoreUnit
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit#removeById
             * @methodOf apiServices.ScoreUnit
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.ScoreUnit#modelName
             * @propertyOf apiServices.ScoreUnit
             * @description
             * The name of the model represented by this $resource,
             * i.e. `ScoreUnit`.
             */
            R.modelName = "ScoreUnit";


            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit#product
             * @methodOf apiServices.ScoreUnit
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::ScoreUnit::product"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.ScoreUnit.levels
             * @header apiServices.ScoreUnit.levels
             * @object
             * @description
             *
             * The object `ScoreUnit.levels` groups methods
             * manipulating `Level` instances related to `ScoreUnit`.
             *
             * Call {@link apiServices.ScoreUnit#levels ScoreUnit.levels()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit#levels
             * @methodOf apiServices.ScoreUnit
             *
             * @description
             *
             * Queries levels of ScoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.levels = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::get::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#count
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Counts levels of ScoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.levels.count = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::count::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#create
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Creates a new instance in levels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.levels.create = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::create::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#createMany
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Creates a new instance in levels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.levels.createMany = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::createMany::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#destroyAll
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Deletes all levels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.levels.destroyAll = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::delete::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#destroyById
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Delete a related item by id for levels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for levels
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.levels.destroyById = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::destroyById::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#findById
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Find a related item by id for levels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for levels
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.levels.findById = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::findById::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnit.levels#updateById
             * @methodOf apiServices.ScoreUnit.levels
             *
             * @description
             *
             * Update a related item by id for levels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for levels
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.levels.updateById = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::updateById::ScoreUnit::levels"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.ScoreUnitSeat
     * @header apiServices.ScoreUnitSeat
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `ScoreUnitSeat` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "ScoreUnitSeat",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/ScoreUnitSeats/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use ScoreUnitSeat.customer() instead.
                    "prototype$__get__customer": {
                        url: urlBase + "/ScoreUnitSeats/:id/customer",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnit() instead.
                    "prototype$__get__scoreUnit": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.findById() instead.
                    "prototype$__findById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.destroyById() instead.
                    "prototype$__destroyById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.updateById() instead.
                    "prototype$__updateById__scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries() instead.
                    "prototype$__get__scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.create() instead.
                    "prototype$__create__scoreUnitSummaries": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.destroyAll() instead.
                    "prototype$__delete__scoreUnitSummaries": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.count() instead.
                    "prototype$__count__scoreUnitSummaries": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#create
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/ScoreUnitSeats",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#createMany
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSeats",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#upsert
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/ScoreUnitSeats",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#exists
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/ScoreUnitSeats/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#findById
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/ScoreUnitSeats/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#find
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSeats",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#findOne
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/ScoreUnitSeats/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#updateAll
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/ScoreUnitSeats/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#deleteById
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/ScoreUnitSeats/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#count
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/ScoreUnitSeats/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#prototype$updateAttributes
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSeat` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/ScoreUnitSeats/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSeat#createChangeStream
                     * @methodOf apiServices.ScoreUnitSeat
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/ScoreUnitSeats/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnitSummary.lastSeat() instead.
                    "::get::ScoreUnitSummary::lastSeat": {
                        url: urlBase + "/ScoreUnitSummaries/:id/lastSeat",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#updateOrCreate
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSeat` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#update
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#destroyById
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSeat` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#removeById
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSeat` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.ScoreUnitSeat#modelName
             * @propertyOf apiServices.ScoreUnitSeat
             * @description
             * The name of the model represented by this $resource,
             * i.e. `ScoreUnitSeat`.
             */
            R.modelName = "ScoreUnitSeat";


            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#customer
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R.customer = function() {
                var TargetResource = $injector.get("Customer");
                var action = TargetResource["::get::ScoreUnitSeat::customer"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#scoreUnit
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Fetches belongsTo relation scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::get::ScoreUnitSeat::scoreUnit"];
                return action.apply(R, arguments);
            };
            /**
             * @ngdoc object
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries
             * @header apiServices.ScoreUnitSeat.scoreUnitSummaries
             * @object
             * @description
             *
             * The object `ScoreUnitSeat.scoreUnitSummaries` groups methods
             * manipulating `ScoreUnitSummary` instances related to `ScoreUnitSeat`.
             *
             * Call {@link apiServices.ScoreUnitSeat#scoreUnitSummaries ScoreUnitSeat.scoreUnitSummaries()}
             * to query all related instances.
             */


            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat#scoreUnitSummaries
             * @methodOf apiServices.ScoreUnitSeat
             *
             * @description
             *
             * Queries scoreUnitSummaries of ScoreUnitSeat.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `filter` â€“ `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::get::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#count
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Counts scoreUnitSummaries of ScoreUnitSeat.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` â€“ `{number=}` -
             */
            R.scoreUnitSummaries.count = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::count::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#create
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Creates a new instance in scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.create = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::create::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#createMany
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Creates a new instance in scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.createMany = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::createMany::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#destroyAll
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Deletes all scoreUnitSummaries of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnitSummaries.destroyAll = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::delete::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#destroyById
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Delete a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R.scoreUnitSummaries.destroyById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::destroyById::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#findById
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Find a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.findById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::findById::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSeat.scoreUnitSummaries#updateById
             * @methodOf apiServices.ScoreUnitSeat.scoreUnitSummaries
             *
             * @description
             *
             * Update a related item by id for scoreUnitSummaries.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `fk` â€“ `{*}` - Foreign key for scoreUnitSummaries
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R.scoreUnitSummaries.updateById = function() {
                var TargetResource = $injector.get("ScoreUnitSummary");
                var action = TargetResource["::updateById::ScoreUnitSeat::scoreUnitSummaries"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.ScoreUnitSummary
     * @header apiServices.ScoreUnitSummary
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `ScoreUnitSummary` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "ScoreUnitSummary",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/ScoreUnitSummaries/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use ScoreUnitSummary.customer() instead.
                    "prototype$__get__customer": {
                        url: urlBase + "/ScoreUnitSummaries/:id/customer",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSummary.scoreUnit() instead.
                    "prototype$__get__scoreUnit": {
                        url: urlBase + "/ScoreUnitSummaries/:id/scoreUnit",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSummary.lastSeat() instead.
                    "prototype$__get__lastSeat": {
                        url: urlBase + "/ScoreUnitSummaries/:id/lastSeat",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSummary.level() instead.
                    "prototype$__get__level": {
                        url: urlBase + "/ScoreUnitSummaries/:id/level",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#create
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/ScoreUnitSummaries",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#createMany
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSummaries",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#upsert
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/ScoreUnitSummaries",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#exists
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/ScoreUnitSummaries/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#findById
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/ScoreUnitSummaries/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#find
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSummaries",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#findOne
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/ScoreUnitSummaries/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#updateAll
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/ScoreUnitSummaries/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#deleteById
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/ScoreUnitSummaries/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#count
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/ScoreUnitSummaries/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#prototype$updateAttributes
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `ScoreUnitSummary` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/ScoreUnitSummaries/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.ScoreUnitSummary#createChangeStream
                     * @methodOf apiServices.ScoreUnitSummary
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/ScoreUnitSummaries/change-stream",
                        method: "POST"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.findById() instead.
                    "::findById::Customer::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.destroyById() instead.
                    "::destroyById::Customer::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.updateById() instead.
                    "::updateById::Customer::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries() instead.
                    "::get::Customer::scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "GET"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.create() instead.
                    "::create::Customer::scoreUnitSummaries": {
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.createMany() instead.
                    "::createMany::Customer::scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.destroyAll() instead.
                    "::delete::Customer::scoreUnitSummaries": {
                        url: urlBase + "/Customers/:id/scoreUnitSummaries",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Customer.scoreUnitSummaries.count() instead.
                    "::count::Customer::scoreUnitSummaries": {
                        url: urlBase + "/Customers/:id/scoreUnitSummaries/count",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.findById() instead.
                    "::findById::Level::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.destroyById() instead.
                    "::destroyById::Level::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.updateById() instead.
                    "::updateById::Level::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries() instead.
                    "::get::Level::scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "GET"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.create() instead.
                    "::create::Level::scoreUnitSummaries": {
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.createMany() instead.
                    "::createMany::Level::scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.destroyAll() instead.
                    "::delete::Level::scoreUnitSummaries": {
                        url: urlBase + "/Levels/:id/scoreUnitSummaries",
                        method: "DELETE"
                    },

                    // INTERNAL. Use Level.scoreUnitSummaries.count() instead.
                    "::count::Level::scoreUnitSummaries": {
                        url: urlBase + "/Levels/:id/scoreUnitSummaries/count",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.findById() instead.
                    "::findById::ScoreUnitSeat::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/:fk",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.destroyById() instead.
                    "::destroyById::ScoreUnitSeat::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/:fk",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.updateById() instead.
                    "::updateById::ScoreUnitSeat::scoreUnitSummaries": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/:fk",
                        method: "PUT"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries() instead.
                    "::get::ScoreUnitSeat::scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "GET"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.create() instead.
                    "::create::ScoreUnitSeat::scoreUnitSummaries": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.createMany() instead.
                    "::createMany::ScoreUnitSeat::scoreUnitSummaries": {
                        isArray: true,
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "POST"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.destroyAll() instead.
                    "::delete::ScoreUnitSeat::scoreUnitSummaries": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries",
                        method: "DELETE"
                    },

                    // INTERNAL. Use ScoreUnitSeat.scoreUnitSummaries.count() instead.
                    "::count::ScoreUnitSeat::scoreUnitSummaries": {
                        url: urlBase + "/ScoreUnitSeats/:id/scoreUnitSummaries/count",
                        method: "GET"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#updateOrCreate
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#update
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#destroyById
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#removeById
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSummary` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.ScoreUnitSummary#modelName
             * @propertyOf apiServices.ScoreUnitSummary
             * @description
             * The name of the model represented by this $resource,
             * i.e. `ScoreUnitSummary`.
             */
            R.modelName = "ScoreUnitSummary";


            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#customer
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Fetches belongsTo relation customer.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Customer` object.)
             * </em>
             */
            R.customer = function() {
                var TargetResource = $injector.get("Customer");
                var action = TargetResource["::get::ScoreUnitSummary::customer"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#scoreUnit
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Fetches belongsTo relation scoreUnit.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnit` object.)
             * </em>
             */
            R.scoreUnit = function() {
                var TargetResource = $injector.get("ScoreUnit");
                var action = TargetResource["::get::ScoreUnitSummary::scoreUnit"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#lastSeat
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Fetches belongsTo relation lastSeat.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ScoreUnitSeat` object.)
             * </em>
             */
            R.lastSeat = function() {
                var TargetResource = $injector.get("ScoreUnitSeat");
                var action = TargetResource["::get::ScoreUnitSummary::lastSeat"];
                return action.apply(R, arguments);
            };

            /**
             * @ngdoc method
             * @name apiServices.ScoreUnitSummary#level
             * @methodOf apiServices.ScoreUnitSummary
             *
             * @description
             *
             * Fetches belongsTo relation level.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Level` object.)
             * </em>
             */
            R.level = function() {
                var TargetResource = $injector.get("Level");
                var action = TargetResource["::get::ScoreUnitSummary::level"];
                return action.apply(R, arguments);
            };

            return R;
        }]);

    /**
     * @ngdoc object
     * @name apiServices.Segment
     * @header apiServices.Segment
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Segment` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Segment",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Segments/:id",
                { 'id': '@id' },
                {

                    // INTERNAL. Use Segment.product() instead.
                    "prototype$__get__product": {
                        url: urlBase + "/Segments/:id/product",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#create
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Segments",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#createMany
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Segments",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#upsert
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Segments",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#exists
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` â€“ `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Segments/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#findById
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Segments/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#find
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Segments",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#findOne
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` â€“ `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Segments/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#updateAll
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The number of instances updated
                     */
                    "updateAll": {
                        url: urlBase + "/Segments/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#deleteById
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/Segments/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#count
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` â€“ `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` â€“ `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Segments/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#prototype$updateAttributes
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` â€“ `{*}` - PersistedModel id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Segment` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Segments/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name apiServices.Segment#createChangeStream
                     * @methodOf apiServices.Segment
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` â€“ `{object=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` â€“ `{ReadableStream=}` -
                     */
                    "createChangeStream": {
                        url: urlBase + "/Segments/change-stream",
                        method: "POST"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name apiServices.Segment#updateOrCreate
             * @methodOf apiServices.Segment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Segment` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name apiServices.Segment#update
             * @methodOf apiServices.Segment
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` â€“ `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name apiServices.Segment#destroyById
             * @methodOf apiServices.Segment
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Segment` object.)
             * </em>
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name apiServices.Segment#removeById
             * @methodOf apiServices.Segment
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Segment` object.)
             * </em>
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name apiServices.Segment#modelName
             * @propertyOf apiServices.Segment
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Segment`.
             */
            R.modelName = "Segment";


            /**
             * @ngdoc method
             * @name apiServices.Segment#product
             * @methodOf apiServices.Segment
             *
             * @description
             *
             * Fetches belongsTo relation product.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` â€“ `{*}` - PersistedModel id
             *
             *  - `refresh` â€“ `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Product` object.)
             * </em>
             */
            R.product = function() {
                var TargetResource = $injector.get("Product");
                var action = TargetResource["::get::Segment::product"];
                return action.apply(R, arguments);
            };

            return R;
        }]);


    module
        .factory('LoopBackAuth', function() {
            var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
            var propsPrefix = '$LoopBack$';

            function LoopBackAuth() {
                var self = this;
                props.forEach(function(name) {
                    self[name] = load(name);
                });
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.save = function() {
                var self = this;
                var storage = this.rememberMe ? localStorage : sessionStorage;
                props.forEach(function(name) {
                    save(storage, name, self[name]);
                });
            };

            LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            }

            LoopBackAuth.prototype.clearUser = function() {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.clearStorage = function() {
                props.forEach(function(name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new LoopBackAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                try {
                    var key = propsPrefix + name;
                    if (value == null) value = '';
                    storage[key] = value;
                } catch(err) {
                    console.log('Cannot access local/session storage:', err);
                }
            }

            function load(name) {
                var key = propsPrefix + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
            function($q, LoopBackAuth) {
                return {
                    'request': function(config) {

                        // filter out external requests
                        var host = getHost(config.url);
                        if (host && host !== urlBaseHost) {
                            return config;
                        }

                        if (LoopBackAuth.accessTokenId) {
                            config.headers[authHeader] = LoopBackAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: { error: { status: 401 } },
                                status: 401,
                                config: config,
                                headers: function() { return undefined; }
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    }
                }
            }])

        /**
         * @ngdoc object
         * @name apiServices.LoopBackResourceProvider
         * @header apiServices.LoopBackResourceProvider
         * @description
         * Use `LoopBackResourceProvider` to change the global configuration
         * settings used by all models. Note that the provider is available
         * to Configuration Blocks only, see
         * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
         * for more details.
         *
         * ## Example
         *
         * ```js
         * angular.module('app')
         *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
         * ```
         */
        .provider('LoopBackResource', function LoopBackResourceProvider() {
            /**
             * @ngdoc method
             * @name apiServices.LoopBackResourceProvider#setAuthHeader
             * @methodOf apiServices.LoopBackResourceProvider
             * @param {string} header The header name to use, e.g. `X-Access-Token`
             * @description
             * Configure the REST transport to use a different header for sending
             * the authentication token. It is sent in the `Authorization` header
             * by default.
             */
            this.setAuthHeader = function(header) {
                authHeader = header;
            };

            /**
             * @ngdoc method
             * @name apiServices.LoopBackResourceProvider#setUrlBase
             * @methodOf apiServices.LoopBackResourceProvider
             * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
             * @description
             * Change the URL of the REST API server. By default, the URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.setUrlBase = function(url) {
                urlBase = url;
                urlBaseHost = getHost(urlBase) || location.host;
            };

            /**
             * @ngdoc method
             * @name apiServices.LoopBackResourceProvider#getUrlBase
             * @methodOf apiServices.LoopBackResourceProvider
             * @description
             * Get the URL of the REST API server. The URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.getUrlBase = function() {
                return urlBase;
            };

            this.$get = ['$resource', function($resource) {
                return function(url, params, actions) {
                    var resource = $resource(url, params, actions);

                    // Angular always calls POST on $save()
                    // This hack is based on
                    // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
                    resource.prototype.$save = function(success, error) {
                        // Fortunately, LoopBack provides a convenient `upsert` method
                        // that exactly fits our needs.
                        var result = resource.upsert.call(this, {}, this, success, error);
                        return result.$promise || result;
                    };
                    return resource;
                };
            }];
        });

})(window, window.angular);