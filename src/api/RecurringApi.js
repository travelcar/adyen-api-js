/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 25
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DisableRequest', 'model/DisableResult', 'model/Error', 'model/RecurringDetailsRequest', 'model/RecurringDetailsResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DisableRequest'), require('../model/DisableResult'), require('../model/Error'), require('../model/RecurringDetailsRequest'), require('../model/RecurringDetailsResult'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.RecurringApi = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.DisableRequest, root.AdyenApiJs.DisableResult, root.AdyenApiJs.Error, root.AdyenApiJs.RecurringDetailsRequest, root.AdyenApiJs.RecurringDetailsResult);
  }
}(this, function(ApiClient, DisableRequest, DisableResult, Error, RecurringDetailsRequest, RecurringDetailsResult) {
  'use strict';

  /**
   * Recurring service.
   * @module api/RecurringApi
   * @version 1.25.4
   */

  /**
   * Constructs a new RecurringApi. 
   * @alias module:api/RecurringApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Disable a stored payment detail
     * Disable a stored payment detail
     * @param {module:model/DisableRequest} disableRequest The disable request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DisableResult}
     */
    this.disable = function(disableRequest) {
      var postBody = disableRequest;

      // verify the required parameter 'disableRequest' is set
      if (disableRequest == undefined || disableRequest == null) {
        throw new Error("Missing the required parameter 'disableRequest' when calling disable");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DisableResult;

      return this.apiClient.callApi(
        '/Recurring/v25/disable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Retrieves stored payment details for a shopper
     * Lists the stored payment details for a shopper, if available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.
     * @param {module:model/RecurringDetailsRequest} recurringDetailsRequest The recurring details request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RecurringDetailsResult}
     */
    this.listRecurringDetails = function(recurringDetailsRequest) {
      var postBody = recurringDetailsRequest;

      // verify the required parameter 'recurringDetailsRequest' is set
      if (recurringDetailsRequest == undefined || recurringDetailsRequest == null) {
        throw new Error("Missing the required parameter 'recurringDetailsRequest' when calling listRecurringDetails");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RecurringDetailsResult;

      return this.apiClient.callApi(
        '/Recurring/v25/listRecurringDetails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
