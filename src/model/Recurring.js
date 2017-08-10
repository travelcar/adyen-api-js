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
    define(['ApiClient', 'model/Contract'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Contract'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.Recurring = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Contract);
  }
}(this, function(ApiClient, Contract) {
  'use strict';




  /**
   * The Recurring model module.
   * @module model/Recurring
   * @version 1.25.4
   */

  /**
   * Constructs a new <code>Recurring</code>.
   * the recurring properties of the payment
   * @alias module:model/Recurring
   * @class
   * @param contract {module:model/Contract} 
   */
  var exports = function(contract) {
    var _this = this;

    _this['contract'] = contract;

  };

  /**
   * Constructs a <code>Recurring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recurring} obj Optional instance to populate.
   * @return {module:model/Recurring} The populated <code>Recurring</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contract')) {
        obj['contract'] = Contract.constructFromObject(data['contract']);
      }
      if (data.hasOwnProperty('recurringDetailName')) {
        obj['recurringDetailName'] = ApiClient.convertToType(data['recurringDetailName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Contract} contract
   */
  exports.prototype['contract'] = undefined;
  /**
   * assign a descriptive name for this detail
   * @member {String} recurringDetailName
   */
  exports.prototype['recurringDetailName'] = undefined;


  /**
   * @return {module:model/Contract}
   */
  exports.prototype.getContract = function() {
    return this['contract'];
  }

  /**
   * @param {module:model/Contract} contract
   */
  exports.prototype.setContract = function(contract) {
    this['contract'] = contract;
  }


  /**
   * Returns assign a descriptive name for this detail
   * @return {String}
   */
  exports.prototype.getRecurringDetailName = function() {
    return this['recurringDetailName'];
  }

  /**
   * Sets assign a descriptive name for this detail
   * @param {String} recurringDetailName assign a descriptive name for this detail
   */
  exports.prototype.setRecurringDetailName = function(recurringDetailName) {
    this['recurringDetailName'] = recurringDetailName;
  }



  return exports;
}));


