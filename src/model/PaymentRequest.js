/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/Amount', 'model/BankAccount', 'model/BrowserInfo', 'model/Card', 'model/ForexQuote', 'model/Installments', 'model/Name', 'model/Recurring', 'model/ShopperInteraction', 'model/ThreeDSecureData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Amount'), require('./BankAccount'), require('./BrowserInfo'), require('./Card'), require('./ForexQuote'), require('./Installments'), require('./Name'), require('./Recurring'), require('./ShopperInteraction'), require('./ThreeDSecureData'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.PaymentRequest = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Address, root.AdyenApiJs.Amount, root.AdyenApiJs.BankAccount, root.AdyenApiJs.BrowserInfo, root.AdyenApiJs.Card, root.AdyenApiJs.ForexQuote, root.AdyenApiJs.Installments, root.AdyenApiJs.Name, root.AdyenApiJs.Recurring, root.AdyenApiJs.ShopperInteraction, root.AdyenApiJs.ThreeDSecureData);
  }
}(this, function(ApiClient, Address, Amount, BankAccount, BrowserInfo, Card, ForexQuote, Installments, Name, Recurring, ShopperInteraction, ThreeDSecureData) {
  'use strict';




  /**
   * The PaymentRequest model module.
   * @module model/PaymentRequest
   * @version 1.30.1
   */

  /**
   * Constructs a new <code>PaymentRequest</code>.
   * @alias module:model/PaymentRequest
   * @class
   */
  var exports = function() {
    var _this = this;




































  };

  /**
   * Constructs a <code>PaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentRequest} obj Optional instance to populate.
   * @return {module:model/PaymentRequest} The populated <code>PaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Card.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('mpiData')) {
        obj['mpiData'] = ThreeDSecureData.constructFromObject(data['mpiData']);
      }
      if (data.hasOwnProperty('bankAccount')) {
        obj['bankAccount'] = BankAccount.constructFromObject(data['bankAccount']);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Amount.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = Address.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('shopperIP')) {
        obj['shopperIP'] = ApiClient.convertToType(data['shopperIP'], 'String');
      }
      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('browserInfo')) {
        obj['browserInfo'] = BrowserInfo.constructFromObject(data['browserInfo']);
      }
      if (data.hasOwnProperty('shopperInteraction')) {
        obj['shopperInteraction'] = ShopperInteraction.constructFromObject(data['shopperInteraction']);
      }
      if (data.hasOwnProperty('shopperEmail')) {
        obj['shopperEmail'] = ApiClient.convertToType(data['shopperEmail'], 'String');
      }
      if (data.hasOwnProperty('shopperReference')) {
        obj['shopperReference'] = ApiClient.convertToType(data['shopperReference'], 'String');
      }
      if (data.hasOwnProperty('recurring')) {
        obj['recurring'] = Recurring.constructFromObject(data['recurring']);
      }
      if (data.hasOwnProperty('shopperStatement')) {
        obj['shopperStatement'] = ApiClient.convertToType(data['shopperStatement'], 'String');
      }
      if (data.hasOwnProperty('fraudOffset')) {
        obj['fraudOffset'] = ApiClient.convertToType(data['fraudOffset'], 'Number');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'String');
      }
      if (data.hasOwnProperty('additionalAmount')) {
        obj['additionalAmount'] = Amount.constructFromObject(data['additionalAmount']);
      }
      if (data.hasOwnProperty('selectedRecurringDetailReference')) {
        obj['selectedRecurringDetailReference'] = ApiClient.convertToType(data['selectedRecurringDetailReference'], 'String');
      }
      if (data.hasOwnProperty('orderReference')) {
        obj['orderReference'] = ApiClient.convertToType(data['orderReference'], 'String');
      }
      if (data.hasOwnProperty('merchantOrderReference')) {
        obj['merchantOrderReference'] = ApiClient.convertToType(data['merchantOrderReference'], 'String');
      }
      if (data.hasOwnProperty('dccQuote')) {
        obj['dccQuote'] = ForexQuote.constructFromObject(data['dccQuote']);
      }
      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], Object);
      }
      if (data.hasOwnProperty('shopperName')) {
        obj['shopperName'] = Name.constructFromObject(data['shopperName']);
      }
      if (data.hasOwnProperty('shopperLocale')) {
        obj['shopperLocale'] = ApiClient.convertToType(data['shopperLocale'], 'String');
      }
      if (data.hasOwnProperty('selectedBrand')) {
        obj['selectedBrand'] = ApiClient.convertToType(data['selectedBrand'], 'String');
      }
      if (data.hasOwnProperty('deliveryAddress')) {
        obj['deliveryAddress'] = Address.constructFromObject(data['deliveryAddress']);
      }
      if (data.hasOwnProperty('deliveryDate')) {
        obj['deliveryDate'] = ApiClient.convertToType(data['deliveryDate'], 'Date');
      }
      if (data.hasOwnProperty('deviceFingerprint')) {
        obj['deviceFingerprint'] = ApiClient.convertToType(data['deviceFingerprint'], 'String');
      }
      if (data.hasOwnProperty('installments')) {
        obj['installments'] = Installments.constructFromObject(data['installments']);
      }
      if (data.hasOwnProperty('socialSecurityNumber')) {
        obj['socialSecurityNumber'] = ApiClient.convertToType(data['socialSecurityNumber'], 'String');
      }
      if (data.hasOwnProperty('captureDelayHours')) {
        obj['captureDelayHours'] = ApiClient.convertToType(data['captureDelayHours'], 'Number');
      }
      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
      }
      if (data.hasOwnProperty('telephoneNumber')) {
        obj['telephoneNumber'] = ApiClient.convertToType(data['telephoneNumber'], 'String');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Card} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/ThreeDSecureData} mpiData
   */
  exports.prototype['mpiData'] = undefined;
  /**
   * @member {module:model/BankAccount} bankAccount
   */
  exports.prototype['bankAccount'] = undefined;
  /**
   * @member {module:model/Amount} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * the reference assigned to the payment
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {module:model/Address} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * the IP address of the shopper
   * @member {String} shopperIP
   */
  exports.prototype['shopperIP'] = undefined;
  /**
   * the merchant account which will be used to process the payment
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * @member {module:model/BrowserInfo} browserInfo
   */
  exports.prototype['browserInfo'] = undefined;
  /**
   * @member {module:model/ShopperInteraction} shopperInteraction
   */
  exports.prototype['shopperInteraction'] = undefined;
  /**
   * the email address of the shopper / customer
   * @member {String} shopperEmail
   */
  exports.prototype['shopperEmail'] = undefined;
  /**
   * a reference used to uniquely identify the shopper (e.g. user ID or account ID)
   * @member {String} shopperReference
   */
  exports.prototype['shopperReference'] = undefined;
  /**
   * @member {module:model/Recurring} recurring
   */
  exports.prototype['recurring'] = undefined;
  /**
   * the text to appear on the shopper's statement
   * @member {String} shopperStatement
   */
  exports.prototype['shopperStatement'] = undefined;
  /**
   * the offset that is added to the normal fraud score (positive or negative)
   * @member {Number} fraudOffset
   */
  exports.prototype['fraudOffset'] = undefined;
  /**
   * @member {String} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * @member {module:model/Amount} additionalAmount
   */
  exports.prototype['additionalAmount'] = undefined;
  /**
   * the recurringDetailReference you want to use for this payment
   * @member {String} selectedRecurringDetailReference
   */
  exports.prototype['selectedRecurringDetailReference'] = undefined;
  /**
   * the order reference to link multiple partial payments
   * @member {String} orderReference
   */
  exports.prototype['orderReference'] = undefined;
  /**
   * the reference to link multiple transactions to each other
   * @member {String} merchantOrderReference
   */
  exports.prototype['merchantOrderReference'] = undefined;
  /**
   * @member {module:model/ForexQuote} dccQuote
   */
  exports.prototype['dccQuote'] = undefined;
  /**
   * a map of name/value pairs for passing in additional/industry-specific data
   * @member {Object} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * @member {module:model/Name} shopperName
   */
  exports.prototype['shopperName'] = undefined;
  /**
   * the combination of language code and country code to specify the language to be used in the payment
   * @member {String} shopperLocale
   */
  exports.prototype['shopperLocale'] = undefined;
  /**
   * the selected brand how to process the payment for dual branded cards
   * @member {String} selectedBrand
   */
  exports.prototype['selectedBrand'] = undefined;
  /**
   * @member {module:model/Address} deliveryAddress
   */
  exports.prototype['deliveryAddress'] = undefined;
  /**
   * the expected date of delivery or fulfillment
   * @member {Date} deliveryDate
   */
  exports.prototype['deliveryDate'] = undefined;
  /**
   * @member {String} deviceFingerprint
   */
  exports.prototype['deviceFingerprint'] = undefined;
  /**
   * @member {module:model/Installments} installments
   */
  exports.prototype['installments'] = undefined;
  /**
   * the shopper's social security number
   * @member {String} socialSecurityNumber
   */
  exports.prototype['socialSecurityNumber'] = undefined;
  /**
   * the number of hours delay between the authorisation and scheduled auto-capture
   * @member {Number} captureDelayHours
   */
  exports.prototype['captureDelayHours'] = undefined;
  /**
   * the shopper's date of birth
   * @member {Date} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
  /**
   * the shopper's telephone number
   * @member {String} telephoneNumber
   */
  exports.prototype['telephoneNumber'] = undefined;
  /**
   * the mcc value that is required to process this payment
   * @member {String} mcc
   */
  exports.prototype['mcc'] = undefined;
  /**
   * a map of key/value pairs of metadata sent by merchant
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;


  /**
   * @return {module:model/Card}
   */
  exports.prototype.getCard = function() {
    return this['card'];
  }

  /**
   * @param {module:model/Card} card
   */
  exports.prototype.setCard = function(card) {
    this['card'] = card;
  }


  /**
   * @return {module:model/ThreeDSecureData}
   */
  exports.prototype.getMpiData = function() {
    return this['mpiData'];
  }

  /**
   * @param {module:model/ThreeDSecureData} mpiData
   */
  exports.prototype.setMpiData = function(mpiData) {
    this['mpiData'] = mpiData;
  }


  /**
   * @return {module:model/BankAccount}
   */
  exports.prototype.getBankAccount = function() {
    return this['bankAccount'];
  }

  /**
   * @param {module:model/BankAccount} bankAccount
   */
  exports.prototype.setBankAccount = function(bankAccount) {
    this['bankAccount'] = bankAccount;
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
   * Returns the reference assigned to the payment
   * @return {String}
   */
  exports.prototype.getReference = function() {
    return this['reference'];
  }

  /**
   * Sets the reference assigned to the payment
   * @param {String} reference the reference assigned to the payment
   */
  exports.prototype.setReference = function(reference) {
    this['reference'] = reference;
  }


  /**
   * @return {module:model/Address}
   */
  exports.prototype.getBillingAddress = function() {
    return this['billingAddress'];
  }

  /**
   * @param {module:model/Address} billingAddress
   */
  exports.prototype.setBillingAddress = function(billingAddress) {
    this['billingAddress'] = billingAddress;
  }


  /**
   * Returns the IP address of the shopper
   * @return {String}
   */
  exports.prototype.getShopperIP = function() {
    return this['shopperIP'];
  }

  /**
   * Sets the IP address of the shopper
   * @param {String} shopperIP the IP address of the shopper
   */
  exports.prototype.setShopperIP = function(shopperIP) {
    this['shopperIP'] = shopperIP;
  }


  /**
   * Returns the merchant account which will be used to process the payment
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets the merchant account which will be used to process the payment
   * @param {String} merchantAccount the merchant account which will be used to process the payment
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * @return {module:model/BrowserInfo}
   */
  exports.prototype.getBrowserInfo = function() {
    return this['browserInfo'];
  }

  /**
   * @param {module:model/BrowserInfo} browserInfo
   */
  exports.prototype.setBrowserInfo = function(browserInfo) {
    this['browserInfo'] = browserInfo;
  }


  /**
   * @return {module:model/ShopperInteraction}
   */
  exports.prototype.getShopperInteraction = function() {
    return this['shopperInteraction'];
  }

  /**
   * @param {module:model/ShopperInteraction} shopperInteraction
   */
  exports.prototype.setShopperInteraction = function(shopperInteraction) {
    this['shopperInteraction'] = shopperInteraction;
  }


  /**
   * Returns the email address of the shopper / customer
   * @return {String}
   */
  exports.prototype.getShopperEmail = function() {
    return this['shopperEmail'];
  }

  /**
   * Sets the email address of the shopper / customer
   * @param {String} shopperEmail the email address of the shopper / customer
   */
  exports.prototype.setShopperEmail = function(shopperEmail) {
    this['shopperEmail'] = shopperEmail;
  }


  /**
   * Returns a reference used to uniquely identify the shopper (e.g. user ID or account ID)
   * @return {String}
   */
  exports.prototype.getShopperReference = function() {
    return this['shopperReference'];
  }

  /**
   * Sets a reference used to uniquely identify the shopper (e.g. user ID or account ID)
   * @param {String} shopperReference a reference used to uniquely identify the shopper (e.g. user ID or account ID)
   */
  exports.prototype.setShopperReference = function(shopperReference) {
    this['shopperReference'] = shopperReference;
  }


  /**
   * @return {module:model/Recurring}
   */
  exports.prototype.getRecurring = function() {
    return this['recurring'];
  }

  /**
   * @param {module:model/Recurring} recurring
   */
  exports.prototype.setRecurring = function(recurring) {
    this['recurring'] = recurring;
  }


  /**
   * Returns the text to appear on the shopper's statement
   * @return {String}
   */
  exports.prototype.getShopperStatement = function() {
    return this['shopperStatement'];
  }

  /**
   * Sets the text to appear on the shopper's statement
   * @param {String} shopperStatement the text to appear on the shopper's statement
   */
  exports.prototype.setShopperStatement = function(shopperStatement) {
    this['shopperStatement'] = shopperStatement;
  }


  /**
   * Returns the offset that is added to the normal fraud score (positive or negative)
   * @return {Number}
   */
  exports.prototype.getFraudOffset = function() {
    return this['fraudOffset'];
  }

  /**
   * Sets the offset that is added to the normal fraud score (positive or negative)
   * @param {Number} fraudOffset the offset that is added to the normal fraud score (positive or negative)
   */
  exports.prototype.setFraudOffset = function(fraudOffset) {
    this['fraudOffset'] = fraudOffset;
  }


  /**
   * @return {String}
   */
  exports.prototype.getSessionId = function() {
    return this['sessionId'];
  }

  /**
   * @param {String} sessionId
   */
  exports.prototype.setSessionId = function(sessionId) {
    this['sessionId'] = sessionId;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getAdditionalAmount = function() {
    return this['additionalAmount'];
  }

  /**
   * @param {module:model/Amount} additionalAmount
   */
  exports.prototype.setAdditionalAmount = function(additionalAmount) {
    this['additionalAmount'] = additionalAmount;
  }


  /**
   * Returns the recurringDetailReference you want to use for this payment
   * @return {String}
   */
  exports.prototype.getSelectedRecurringDetailReference = function() {
    return this['selectedRecurringDetailReference'];
  }

  /**
   * Sets the recurringDetailReference you want to use for this payment
   * @param {String} selectedRecurringDetailReference the recurringDetailReference you want to use for this payment
   */
  exports.prototype.setSelectedRecurringDetailReference = function(selectedRecurringDetailReference) {
    this['selectedRecurringDetailReference'] = selectedRecurringDetailReference;
  }


  /**
   * Returns the order reference to link multiple partial payments
   * @return {String}
   */
  exports.prototype.getOrderReference = function() {
    return this['orderReference'];
  }

  /**
   * Sets the order reference to link multiple partial payments
   * @param {String} orderReference the order reference to link multiple partial payments
   */
  exports.prototype.setOrderReference = function(orderReference) {
    this['orderReference'] = orderReference;
  }


  /**
   * Returns the reference to link multiple transactions to each other
   * @return {String}
   */
  exports.prototype.getMerchantOrderReference = function() {
    return this['merchantOrderReference'];
  }

  /**
   * Sets the reference to link multiple transactions to each other
   * @param {String} merchantOrderReference the reference to link multiple transactions to each other
   */
  exports.prototype.setMerchantOrderReference = function(merchantOrderReference) {
    this['merchantOrderReference'] = merchantOrderReference;
  }


  /**
   * @return {module:model/ForexQuote}
   */
  exports.prototype.getDccQuote = function() {
    return this['dccQuote'];
  }

  /**
   * @param {module:model/ForexQuote} dccQuote
   */
  exports.prototype.setDccQuote = function(dccQuote) {
    this['dccQuote'] = dccQuote;
  }


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
   * @return {module:model/Name}
   */
  exports.prototype.getShopperName = function() {
    return this['shopperName'];
  }

  /**
   * @param {module:model/Name} shopperName
   */
  exports.prototype.setShopperName = function(shopperName) {
    this['shopperName'] = shopperName;
  }


  /**
   * Returns the combination of language code and country code to specify the language to be used in the payment
   * @return {String}
   */
  exports.prototype.getShopperLocale = function() {
    return this['shopperLocale'];
  }

  /**
   * Sets the combination of language code and country code to specify the language to be used in the payment
   * @param {String} shopperLocale the combination of language code and country code to specify the language to be used in the payment
   */
  exports.prototype.setShopperLocale = function(shopperLocale) {
    this['shopperLocale'] = shopperLocale;
  }


  /**
   * Returns the selected brand how to process the payment for dual branded cards
   * @return {String}
   */
  exports.prototype.getSelectedBrand = function() {
    return this['selectedBrand'];
  }

  /**
   * Sets the selected brand how to process the payment for dual branded cards
   * @param {String} selectedBrand the selected brand how to process the payment for dual branded cards
   */
  exports.prototype.setSelectedBrand = function(selectedBrand) {
    this['selectedBrand'] = selectedBrand;
  }


  /**
   * @return {module:model/Address}
   */
  exports.prototype.getDeliveryAddress = function() {
    return this['deliveryAddress'];
  }

  /**
   * @param {module:model/Address} deliveryAddress
   */
  exports.prototype.setDeliveryAddress = function(deliveryAddress) {
    this['deliveryAddress'] = deliveryAddress;
  }


  /**
   * Returns the expected date of delivery or fulfillment
   * @return {Date}
   */
  exports.prototype.getDeliveryDate = function() {
    return this['deliveryDate'];
  }

  /**
   * Sets the expected date of delivery or fulfillment
   * @param {Date} deliveryDate the expected date of delivery or fulfillment
   */
  exports.prototype.setDeliveryDate = function(deliveryDate) {
    this['deliveryDate'] = deliveryDate;
  }


  /**
   * @return {String}
   */
  exports.prototype.getDeviceFingerprint = function() {
    return this['deviceFingerprint'];
  }

  /**
   * @param {String} deviceFingerprint
   */
  exports.prototype.setDeviceFingerprint = function(deviceFingerprint) {
    this['deviceFingerprint'] = deviceFingerprint;
  }


  /**
   * @return {module:model/Installments}
   */
  exports.prototype.getInstallments = function() {
    return this['installments'];
  }

  /**
   * @param {module:model/Installments} installments
   */
  exports.prototype.setInstallments = function(installments) {
    this['installments'] = installments;
  }


  /**
   * Returns the shopper's social security number
   * @return {String}
   */
  exports.prototype.getSocialSecurityNumber = function() {
    return this['socialSecurityNumber'];
  }

  /**
   * Sets the shopper's social security number
   * @param {String} socialSecurityNumber the shopper's social security number
   */
  exports.prototype.setSocialSecurityNumber = function(socialSecurityNumber) {
    this['socialSecurityNumber'] = socialSecurityNumber;
  }


  /**
   * Returns the number of hours delay between the authorisation and scheduled auto-capture
   * @return {Number}
   */
  exports.prototype.getCaptureDelayHours = function() {
    return this['captureDelayHours'];
  }

  /**
   * Sets the number of hours delay between the authorisation and scheduled auto-capture
   * @param {Number} captureDelayHours the number of hours delay between the authorisation and scheduled auto-capture
   */
  exports.prototype.setCaptureDelayHours = function(captureDelayHours) {
    this['captureDelayHours'] = captureDelayHours;
  }


  /**
   * Returns the shopper's date of birth
   * @return {Date}
   */
  exports.prototype.getDateOfBirth = function() {
    return this['dateOfBirth'];
  }

  /**
   * Sets the shopper's date of birth
   * @param {Date} dateOfBirth the shopper's date of birth
   */
  exports.prototype.setDateOfBirth = function(dateOfBirth) {
    this['dateOfBirth'] = dateOfBirth;
  }


  /**
   * Returns the shopper's telephone number
   * @return {String}
   */
  exports.prototype.getTelephoneNumber = function() {
    return this['telephoneNumber'];
  }

  /**
   * Sets the shopper's telephone number
   * @param {String} telephoneNumber the shopper's telephone number
   */
  exports.prototype.setTelephoneNumber = function(telephoneNumber) {
    this['telephoneNumber'] = telephoneNumber;
  }


  /**
   * Returns the mcc value that is required to process this payment
   * @return {String}
   */
  exports.prototype.getMcc = function() {
    return this['mcc'];
  }

  /**
   * Sets the mcc value that is required to process this payment
   * @param {String} mcc the mcc value that is required to process this payment
   */
  exports.prototype.setMcc = function(mcc) {
    this['mcc'] = mcc;
  }


  /**
   * Returns a map of key/value pairs of metadata sent by merchant
   * @return {Object}
   */
  exports.prototype.getMetadata = function() {
    return this['metadata'];
  }

  /**
   * Sets a map of key/value pairs of metadata sent by merchant
   * @param {Object} metadata a map of key/value pairs of metadata sent by merchant
   */
  exports.prototype.setMetadata = function(metadata) {
    this['metadata'] = metadata;
  }



  return exports;
}));


