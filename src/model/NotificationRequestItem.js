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
    define(['ApiClient', 'model/Amount', 'model/EventCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./EventCode'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.NotificationRequestItem = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Amount, root.AdyenApiJs.EventCode);
  }
}(this, function(ApiClient, Amount, EventCode) {
  'use strict';




  /**
   * The NotificationRequestItem model module.
   * @module model/NotificationRequestItem
   * @version 1.25.2
   */

  /**
   * Constructs a new <code>NotificationRequestItem</code>.
   * @alias module:model/NotificationRequestItem
   * @class
   * @param amount {module:model/Amount} 
   * @param pspReference {String} the unique identifier associated with the transaction/the request
   * @param eventCode {module:model/EventCode} 
   * @param eventDate {Date} The time when the event was generated.
   * @param merchantAccountCode {String} The merchant account identifier used in the transaction the notification item refers to.
   * @param operations {Array.<module:model/NotificationRequestItem.OperationsEnum>} This field holds a list of the modification operations supported by the transaction the notification item refers to.
   * @param merchantReference {String} A reference to uniquely identify the payment.
   * @param paymentMethod {String} The payment method used in the transaction the notification item refers to.
   * @param success {Boolean} Informs about the outcome of the event (eventCode) the notification refers to, if true then the event (eventCode) the notification refers to was executed successfully, else if false then the event was not executed successfully.
   */
  var exports = function(amount, pspReference, eventCode, eventDate, merchantAccountCode, operations, merchantReference, paymentMethod, success) {
    var _this = this;


    _this['amount'] = amount;
    _this['pspReference'] = pspReference;
    _this['eventCode'] = eventCode;
    _this['eventDate'] = eventDate;
    _this['merchantAccountCode'] = merchantAccountCode;
    _this['operations'] = operations;
    _this['merchantReference'] = merchantReference;

    _this['paymentMethod'] = paymentMethod;

    _this['success'] = success;
  };

  /**
   * Constructs a <code>NotificationRequestItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationRequestItem} obj Optional instance to populate.
   * @return {module:model/NotificationRequestItem} The populated <code>NotificationRequestItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], Object);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Amount.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('pspReference')) {
        obj['pspReference'] = ApiClient.convertToType(data['pspReference'], 'String');
      }
      if (data.hasOwnProperty('eventCode')) {
        obj['eventCode'] = EventCode.constructFromObject(data['eventCode']);
      }
      if (data.hasOwnProperty('eventDate')) {
        obj['eventDate'] = ApiClient.convertToType(data['eventDate'], 'Date');
      }
      if (data.hasOwnProperty('merchantAccountCode')) {
        obj['merchantAccountCode'] = ApiClient.convertToType(data['merchantAccountCode'], 'String');
      }
      if (data.hasOwnProperty('operations')) {
        obj['operations'] = ApiClient.convertToType(data['operations'], ['String']);
      }
      if (data.hasOwnProperty('merchantReference')) {
        obj['merchantReference'] = ApiClient.convertToType(data['merchantReference'], 'String');
      }
      if (data.hasOwnProperty('originalReference')) {
        obj['originalReference'] = ApiClient.convertToType(data['originalReference'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * a map of name/value pairs for passing in additional/industry-specific data
   * @member {Object} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * @member {module:model/Amount} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * the unique identifier associated with the transaction/the request
   * @member {String} pspReference
   */
  exports.prototype['pspReference'] = undefined;
  /**
   * @member {module:model/EventCode} eventCode
   */
  exports.prototype['eventCode'] = undefined;
  /**
   * The time when the event was generated.
   * @member {Date} eventDate
   */
  exports.prototype['eventDate'] = undefined;
  /**
   * The merchant account identifier used in the transaction the notification item refers to.
   * @member {String} merchantAccountCode
   */
  exports.prototype['merchantAccountCode'] = undefined;
  /**
   * This field holds a list of the modification operations supported by the transaction the notification item refers to.
   * @member {Array.<module:model/NotificationRequestItem.OperationsEnum>} operations
   */
  exports.prototype['operations'] = undefined;
  /**
   * A reference to uniquely identify the payment.
   * @member {String} merchantReference
   */
  exports.prototype['merchantReference'] = undefined;
  /**
   * The originalReference value corresponds to the  pspReference value assigned to the original payment, it's populated only if is about Modification request
   * @member {String} originalReference
   */
  exports.prototype['originalReference'] = undefined;
  /**
   * The payment method used in the transaction the notification item refers to.
   * @member {String} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * This field holds plain text. The value varies depending on whether the outcome of the event is successful or not (
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Informs about the outcome of the event (eventCode) the notification refers to, if true then the event (eventCode) the notification refers to was executed successfully, else if false then the event was not executed successfully.
   * @member {Boolean} success
   */
  exports.prototype['success'] = undefined;


  /**
   * Returns a map of name/value pairs for passing in additional/industry-specific data
   * @return {Object}
   */
  exports.prototype.getAdditionalData = function() {
    return this['additionalData'];
  }

  /**
   * Sets a map of name/value pairs for passing in additional/industry-specific data
   * @param {Object} additionalData a map of name/value pairs for passing in additional/industry-specific data
   */
  exports.prototype.setAdditionalData = function(additionalData) {
    this['additionalData'] = additionalData;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getAmount = function() {
    return this['amount'];
  }

  /**
   * @param {module:model/Amount} amount
   */
  exports.prototype.setAmount = function(amount) {
    this['amount'] = amount;
  }


  /**
   * Returns the unique identifier associated with the transaction/the request
   * @return {String}
   */
  exports.prototype.getPspReference = function() {
    return this['pspReference'];
  }

  /**
   * Sets the unique identifier associated with the transaction/the request
   * @param {String} pspReference the unique identifier associated with the transaction/the request
   */
  exports.prototype.setPspReference = function(pspReference) {
    this['pspReference'] = pspReference;
  }


  /**
   * @return {module:model/EventCode}
   */
  exports.prototype.getEventCode = function() {
    return this['eventCode'];
  }

  /**
   * @param {module:model/EventCode} eventCode
   */
  exports.prototype.setEventCode = function(eventCode) {
    this['eventCode'] = eventCode;
  }


  /**
   * Returns The time when the event was generated.
   * @return {Date}
   */
  exports.prototype.getEventDate = function() {
    return this['eventDate'];
  }

  /**
   * Sets The time when the event was generated.
   * @param {Date} eventDate The time when the event was generated.
   */
  exports.prototype.setEventDate = function(eventDate) {
    this['eventDate'] = eventDate;
  }


  /**
   * Returns The merchant account identifier used in the transaction the notification item refers to.
   * @return {String}
   */
  exports.prototype.getMerchantAccountCode = function() {
    return this['merchantAccountCode'];
  }

  /**
   * Sets The merchant account identifier used in the transaction the notification item refers to.
   * @param {String} merchantAccountCode The merchant account identifier used in the transaction the notification item refers to.
   */
  exports.prototype.setMerchantAccountCode = function(merchantAccountCode) {
    this['merchantAccountCode'] = merchantAccountCode;
  }


  /**
   * Returns This field holds a list of the modification operations supported by the transaction the notification item refers to.
   * @return {Array.<module:model/NotificationRequestItem.OperationsEnum>}
   */
  exports.prototype.getOperations = function() {
    return this['operations'];
  }

  /**
   * Sets This field holds a list of the modification operations supported by the transaction the notification item refers to.
   * @param {Array.<module:model/NotificationRequestItem.OperationsEnum>} operations This field holds a list of the modification operations supported by the transaction the notification item refers to.
   */
  exports.prototype.setOperations = function(operations) {
    this['operations'] = operations;
  }


  /**
   * Returns A reference to uniquely identify the payment.
   * @return {String}
   */
  exports.prototype.getMerchantReference = function() {
    return this['merchantReference'];
  }

  /**
   * Sets A reference to uniquely identify the payment.
   * @param {String} merchantReference A reference to uniquely identify the payment.
   */
  exports.prototype.setMerchantReference = function(merchantReference) {
    this['merchantReference'] = merchantReference;
  }


  /**
   * Returns The originalReference value corresponds to the  pspReference value assigned to the original payment, it's populated only if is about Modification request
   * @return {String}
   */
  exports.prototype.getOriginalReference = function() {
    return this['originalReference'];
  }

  /**
   * Sets The originalReference value corresponds to the  pspReference value assigned to the original payment, it's populated only if is about Modification request
   * @param {String} originalReference The originalReference value corresponds to the  pspReference value assigned to the original payment, it's populated only if is about Modification request
   */
  exports.prototype.setOriginalReference = function(originalReference) {
    this['originalReference'] = originalReference;
  }


  /**
   * Returns The payment method used in the transaction the notification item refers to.
   * @return {String}
   */
  exports.prototype.getPaymentMethod = function() {
    return this['paymentMethod'];
  }

  /**
   * Sets The payment method used in the transaction the notification item refers to.
   * @param {String} paymentMethod The payment method used in the transaction the notification item refers to.
   */
  exports.prototype.setPaymentMethod = function(paymentMethod) {
    this['paymentMethod'] = paymentMethod;
  }


  /**
   * Returns This field holds plain text. The value varies depending on whether the outcome of the event is successful or not (
   * @return {String}
   */
  exports.prototype.getReason = function() {
    return this['reason'];
  }

  /**
   * Sets This field holds plain text. The value varies depending on whether the outcome of the event is successful or not (
   * @param {String} reason This field holds plain text. The value varies depending on whether the outcome of the event is successful or not (
   */
  exports.prototype.setReason = function(reason) {
    this['reason'] = reason;
  }


  /**
   * Returns Informs about the outcome of the event (eventCode) the notification refers to, if true then the event (eventCode) the notification refers to was executed successfully, else if false then the event was not executed successfully.
   * @return {Boolean}
   */
  exports.prototype.getSuccess = function() {
    return this['success'];
  }

  /**
   * Sets Informs about the outcome of the event (eventCode) the notification refers to, if true then the event (eventCode) the notification refers to was executed successfully, else if false then the event was not executed successfully.
   * @param {Boolean} success Informs about the outcome of the event (eventCode) the notification refers to, if true then the event (eventCode) the notification refers to was executed successfully, else if false then the event was not executed successfully.
   */
  exports.prototype.setSuccess = function(success) {
    this['success'] = success;
  }


  /**
   * Allowed values for the <code>operations</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperationsEnum = {
    /**
     * value: "CANCEL"
     * @const
     */
    "CANCEL": "CANCEL",
    /**
     * value: "CAPTURE"
     * @const
     */
    "CAPTURE": "CAPTURE",
    /**
     * value: "REFUND"
     * @const
     */
    "REFUND": "REFUND"  };


  return exports;
}));


