/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Gender'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Gender'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.Name = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Gender);
  }
}(this, function(ApiClient, Gender) {
  'use strict';




  /**
   * The Name model module.
   * @module model/Name
   * @version 1.30.5
   */

  /**
   * Constructs a new <code>Name</code>.
   * the name of the shopper
   * @alias module:model/Name
   * @class
   * @param firstName {String} the first name
   * @param gender {module:model/Gender} 
   * @param lastName {String} the last name
   */
  var exports = function(firstName, gender, lastName) {
    var _this = this;

    _this['firstName'] = firstName;
    _this['gender'] = gender;

    _this['lastName'] = lastName;
  };

  /**
   * Constructs a <code>Name</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Name} obj Optional instance to populate.
   * @return {module:model/Name} The populated <code>Name</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = Gender.constructFromObject(data['gender']);
      }
      if (data.hasOwnProperty('infix')) {
        obj['infix'] = ApiClient.convertToType(data['infix'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
    }
    return obj;
  }

  /**
   * the first name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {module:model/Gender} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * the infix
   * @member {String} infix
   */
  exports.prototype['infix'] = undefined;
  /**
   * the last name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;


  /**
   * Returns the first name
   * @return {String}
   */
  exports.prototype.getFirstName = function() {
    return this['firstName'];
  }

  /**
   * Sets the first name
   * @param {String} firstName the first name
   */
  exports.prototype.setFirstName = function(firstName) {
    this['firstName'] = firstName;
  }


  /**
   * @return {module:model/Gender}
   */
  exports.prototype.getGender = function() {
    return this['gender'];
  }

  /**
   * @param {module:model/Gender} gender
   */
  exports.prototype.setGender = function(gender) {
    this['gender'] = gender;
  }


  /**
   * Returns the infix
   * @return {String}
   */
  exports.prototype.getInfix = function() {
    return this['infix'];
  }

  /**
   * Sets the infix
   * @param {String} infix the infix
   */
  exports.prototype.setInfix = function(infix) {
    this['infix'] = infix;
  }


  /**
   * Returns the last name
   * @return {String}
   */
  exports.prototype.getLastName = function() {
    return this['lastName'];
  }

  /**
   * Sets the last name
   * @param {String} lastName the last name
   */
  exports.prototype.setLastName = function(lastName) {
    this['lastName'] = lastName;
  }



  return exports;
}));


