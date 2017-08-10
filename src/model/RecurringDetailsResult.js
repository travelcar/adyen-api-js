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
    define(['ApiClient', 'model/RecurringDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecurringDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.RecurringDetailsResult = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.RecurringDetail);
  }
}(this, function(ApiClient, RecurringDetail) {
  'use strict';




  /**
   * The RecurringDetailsResult model module.
   * @module model/RecurringDetailsResult
   * @version 1.25.4
   */

  /**
   * Constructs a new <code>RecurringDetailsResult</code>.
   * @alias module:model/RecurringDetailsResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>RecurringDetailsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecurringDetailsResult} obj Optional instance to populate.
   * @return {module:model/RecurringDetailsResult} The populated <code>RecurringDetailsResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('shopperReference')) {
        obj['shopperReference'] = ApiClient.convertToType(data['shopperReference'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [RecurringDetail]);
      }
      if (data.hasOwnProperty('lastKnownShopperEmail')) {
        obj['lastKnownShopperEmail'] = ApiClient.convertToType(data['lastKnownShopperEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * the creation date when the shopper record was created
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * the reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @member {String} shopperReference
   */
  exports.prototype['shopperReference'] = undefined;
  /**
   * a list of one or more recurring payment details
   * @member {Array.<module:model/RecurringDetail>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * the most recent email for this shopper (if available)
   * @member {String} lastKnownShopperEmail
   */
  exports.prototype['lastKnownShopperEmail'] = undefined;


  /**
   * Returns the creation date when the shopper record was created
   * @return {Date}
   */
  exports.prototype.getCreationDate = function() {
    return this['creationDate'];
  }

  /**
   * Sets the creation date when the shopper record was created
   * @param {Date} creationDate the creation date when the shopper record was created
   */
  exports.prototype.setCreationDate = function(creationDate) {
    this['creationDate'] = creationDate;
  }


  /**
   * Returns the reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @return {String}
   */
  exports.prototype.getShopperReference = function() {
    return this['shopperReference'];
  }

  /**
   * Sets the reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @param {String} shopperReference the reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   */
  exports.prototype.setShopperReference = function(shopperReference) {
    this['shopperReference'] = shopperReference;
  }


  /**
   * Returns a list of one or more recurring payment details
   * @return {Array.<module:model/RecurringDetail>}
   */
  exports.prototype.getDetails = function() {
    return this['details'];
  }

  /**
   * Sets a list of one or more recurring payment details
   * @param {Array.<module:model/RecurringDetail>} details a list of one or more recurring payment details
   */
  exports.prototype.setDetails = function(details) {
    this['details'] = details;
  }


  /**
   * Returns the most recent email for this shopper (if available)
   * @return {String}
   */
  exports.prototype.getLastKnownShopperEmail = function() {
    return this['lastKnownShopperEmail'];
  }

  /**
   * Sets the most recent email for this shopper (if available)
   * @param {String} lastKnownShopperEmail the most recent email for this shopper (if available)
   */
  exports.prototype.setLastKnownShopperEmail = function(lastKnownShopperEmail) {
    this['lastKnownShopperEmail'] = lastKnownShopperEmail;
  }



  return exports;
}));


