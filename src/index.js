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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/Amount', 'model/AuthenticationResponse', 'model/BankAccount', 'model/BrowserInfo', 'model/Card', 'model/ConfirmOrDeclineRequest', 'model/ConfirmOrDeclineResult', 'model/Contract', 'model/DirectoryResponse', 'model/DisableRequest', 'model/DisableResult', 'model/Error', 'model/ErrorType', 'model/EventCode', 'model/ForexQuote', 'model/FraudCheckResult', 'model/FraudResult', 'model/Gender', 'model/Installments', 'model/ModificationRequest', 'model/ModificationResult', 'model/ModificationResultResponse', 'model/Name', 'model/NotificationRequest', 'model/NotificationRequestItem', 'model/NotificationRequestItemDetails', 'model/NotificationResult', 'model/PaymentRequest', 'model/PaymentRequest3d', 'model/PaymentResult', 'model/PayoutResultCodeType', 'model/Recurring', 'model/RecurringDetail', 'model/RecurringDetailReferenceType', 'model/RecurringDetailsRequest', 'model/RecurringDetailsResult', 'model/ResultCode', 'model/ShopperInteraction', 'model/StoreDetailAndSubmitRequest', 'model/StoreDetailAndSubmitResult', 'model/ThreeDSecureData', 'api/PaymentApi', 'api/PayoutApi', 'api/RecurringApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Address'), require('./model/Amount'), require('./model/AuthenticationResponse'), require('./model/BankAccount'), require('./model/BrowserInfo'), require('./model/Card'), require('./model/ConfirmOrDeclineRequest'), require('./model/ConfirmOrDeclineResult'), require('./model/Contract'), require('./model/DirectoryResponse'), require('./model/DisableRequest'), require('./model/DisableResult'), require('./model/Error'), require('./model/ErrorType'), require('./model/EventCode'), require('./model/ForexQuote'), require('./model/FraudCheckResult'), require('./model/FraudResult'), require('./model/Gender'), require('./model/Installments'), require('./model/ModificationRequest'), require('./model/ModificationResult'), require('./model/ModificationResultResponse'), require('./model/Name'), require('./model/NotificationRequest'), require('./model/NotificationRequestItem'), require('./model/NotificationRequestItemDetails'), require('./model/NotificationResult'), require('./model/PaymentRequest'), require('./model/PaymentRequest3d'), require('./model/PaymentResult'), require('./model/PayoutResultCodeType'), require('./model/Recurring'), require('./model/RecurringDetail'), require('./model/RecurringDetailReferenceType'), require('./model/RecurringDetailsRequest'), require('./model/RecurringDetailsResult'), require('./model/ResultCode'), require('./model/ShopperInteraction'), require('./model/StoreDetailAndSubmitRequest'), require('./model/StoreDetailAndSubmitResult'), require('./model/ThreeDSecureData'), require('./api/PaymentApi'), require('./api/PayoutApi'), require('./api/RecurringApi'));
  }
}(function(ApiClient, Address, Amount, AuthenticationResponse, BankAccount, BrowserInfo, Card, ConfirmOrDeclineRequest, ConfirmOrDeclineResult, Contract, DirectoryResponse, DisableRequest, DisableResult, Error, ErrorType, EventCode, ForexQuote, FraudCheckResult, FraudResult, Gender, Installments, ModificationRequest, ModificationResult, ModificationResultResponse, Name, NotificationRequest, NotificationRequestItem, NotificationRequestItemDetails, NotificationResult, PaymentRequest, PaymentRequest3d, PaymentResult, PayoutResultCodeType, Recurring, RecurringDetail, RecurringDetailReferenceType, RecurringDetailsRequest, RecurringDetailsResult, ResultCode, ShopperInteraction, StoreDetailAndSubmitRequest, StoreDetailAndSubmitResult, ThreeDSecureData, PaymentApi, PayoutApi, RecurringApi) {
  'use strict';

  /**
   * Operations_about_payments_recurring_and_payout.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AdyenApiJs = require('index'); // See note below*.
   * var xxxSvc = new AdyenApiJs.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AdyenApiJs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AdyenApiJs.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AdyenApiJs.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.25.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The Amount model constructor.
     * @property {module:model/Amount}
     */
    Amount: Amount,
    /**
     * The AuthenticationResponse model constructor.
     * @property {module:model/AuthenticationResponse}
     */
    AuthenticationResponse: AuthenticationResponse,
    /**
     * The BankAccount model constructor.
     * @property {module:model/BankAccount}
     */
    BankAccount: BankAccount,
    /**
     * The BrowserInfo model constructor.
     * @property {module:model/BrowserInfo}
     */
    BrowserInfo: BrowserInfo,
    /**
     * The Card model constructor.
     * @property {module:model/Card}
     */
    Card: Card,
    /**
     * The ConfirmOrDeclineRequest model constructor.
     * @property {module:model/ConfirmOrDeclineRequest}
     */
    ConfirmOrDeclineRequest: ConfirmOrDeclineRequest,
    /**
     * The ConfirmOrDeclineResult model constructor.
     * @property {module:model/ConfirmOrDeclineResult}
     */
    ConfirmOrDeclineResult: ConfirmOrDeclineResult,
    /**
     * The Contract model constructor.
     * @property {module:model/Contract}
     */
    Contract: Contract,
    /**
     * The DirectoryResponse model constructor.
     * @property {module:model/DirectoryResponse}
     */
    DirectoryResponse: DirectoryResponse,
    /**
     * The DisableRequest model constructor.
     * @property {module:model/DisableRequest}
     */
    DisableRequest: DisableRequest,
    /**
     * The DisableResult model constructor.
     * @property {module:model/DisableResult}
     */
    DisableResult: DisableResult,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorType model constructor.
     * @property {module:model/ErrorType}
     */
    ErrorType: ErrorType,
    /**
     * The EventCode model constructor.
     * @property {module:model/EventCode}
     */
    EventCode: EventCode,
    /**
     * The ForexQuote model constructor.
     * @property {module:model/ForexQuote}
     */
    ForexQuote: ForexQuote,
    /**
     * The FraudCheckResult model constructor.
     * @property {module:model/FraudCheckResult}
     */
    FraudCheckResult: FraudCheckResult,
    /**
     * The FraudResult model constructor.
     * @property {module:model/FraudResult}
     */
    FraudResult: FraudResult,
    /**
     * The Gender model constructor.
     * @property {module:model/Gender}
     */
    Gender: Gender,
    /**
     * The Installments model constructor.
     * @property {module:model/Installments}
     */
    Installments: Installments,
    /**
     * The ModificationRequest model constructor.
     * @property {module:model/ModificationRequest}
     */
    ModificationRequest: ModificationRequest,
    /**
     * The ModificationResult model constructor.
     * @property {module:model/ModificationResult}
     */
    ModificationResult: ModificationResult,
    /**
     * The ModificationResultResponse model constructor.
     * @property {module:model/ModificationResultResponse}
     */
    ModificationResultResponse: ModificationResultResponse,
    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name: Name,
    /**
     * The NotificationRequest model constructor.
     * @property {module:model/NotificationRequest}
     */
    NotificationRequest: NotificationRequest,
    /**
     * The NotificationRequestItem model constructor.
     * @property {module:model/NotificationRequestItem}
     */
    NotificationRequestItem: NotificationRequestItem,
    /**
     * The NotificationRequestItemDetails model constructor.
     * @property {module:model/NotificationRequestItemDetails}
     */
    NotificationRequestItemDetails: NotificationRequestItemDetails,
    /**
     * The NotificationResult model constructor.
     * @property {module:model/NotificationResult}
     */
    NotificationResult: NotificationResult,
    /**
     * The PaymentRequest model constructor.
     * @property {module:model/PaymentRequest}
     */
    PaymentRequest: PaymentRequest,
    /**
     * The PaymentRequest3d model constructor.
     * @property {module:model/PaymentRequest3d}
     */
    PaymentRequest3d: PaymentRequest3d,
    /**
     * The PaymentResult model constructor.
     * @property {module:model/PaymentResult}
     */
    PaymentResult: PaymentResult,
    /**
     * The PayoutResultCodeType model constructor.
     * @property {module:model/PayoutResultCodeType}
     */
    PayoutResultCodeType: PayoutResultCodeType,
    /**
     * The Recurring model constructor.
     * @property {module:model/Recurring}
     */
    Recurring: Recurring,
    /**
     * The RecurringDetail model constructor.
     * @property {module:model/RecurringDetail}
     */
    RecurringDetail: RecurringDetail,
    /**
     * The RecurringDetailReferenceType model constructor.
     * @property {module:model/RecurringDetailReferenceType}
     */
    RecurringDetailReferenceType: RecurringDetailReferenceType,
    /**
     * The RecurringDetailsRequest model constructor.
     * @property {module:model/RecurringDetailsRequest}
     */
    RecurringDetailsRequest: RecurringDetailsRequest,
    /**
     * The RecurringDetailsResult model constructor.
     * @property {module:model/RecurringDetailsResult}
     */
    RecurringDetailsResult: RecurringDetailsResult,
    /**
     * The ResultCode model constructor.
     * @property {module:model/ResultCode}
     */
    ResultCode: ResultCode,
    /**
     * The ShopperInteraction model constructor.
     * @property {module:model/ShopperInteraction}
     */
    ShopperInteraction: ShopperInteraction,
    /**
     * The StoreDetailAndSubmitRequest model constructor.
     * @property {module:model/StoreDetailAndSubmitRequest}
     */
    StoreDetailAndSubmitRequest: StoreDetailAndSubmitRequest,
    /**
     * The StoreDetailAndSubmitResult model constructor.
     * @property {module:model/StoreDetailAndSubmitResult}
     */
    StoreDetailAndSubmitResult: StoreDetailAndSubmitResult,
    /**
     * The ThreeDSecureData model constructor.
     * @property {module:model/ThreeDSecureData}
     */
    ThreeDSecureData: ThreeDSecureData,
    /**
     * The PaymentApi service constructor.
     * @property {module:api/PaymentApi}
     */
    PaymentApi: PaymentApi,
    /**
     * The PayoutApi service constructor.
     * @property {module:api/PayoutApi}
     */
    PayoutApi: PayoutApi,
    /**
     * The RecurringApi service constructor.
     * @property {module:api/RecurringApi}
     */
    RecurringApi: RecurringApi
  };

  return exports;
}));
