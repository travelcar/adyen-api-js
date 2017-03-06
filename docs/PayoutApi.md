# AdyenApiJs.PayoutApi

All URIs are relative to *https://pal-test.adyen.com/pal/servlet*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm**](PayoutApi.md#confirm) | **POST** /Payout/v18/confirm | Confirm a payout
[**decline**](PayoutApi.md#decline) | **POST** /Payout/v18/decline | Decline a payout
[**storeDetailAndSubmit**](PayoutApi.md#storeDetailAndSubmit) | **POST** /Payout/v18/storeDetailAndSubmit | Store the payouts details and make a payout request


<a name="confirm"></a>
# **confirm**
> ConfirmOrDeclineResult confirm(confirmOrDeclineRequest)

Confirm a payout

You can decide over a period of seven days to proceed a payout, after which the payout expires automatically

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PayoutApi();

var confirmOrDeclineRequest = new AdyenApiJs.ConfirmOrDeclineRequest(); // ConfirmOrDeclineRequest | The confirm or decline payout request

apiInstance.confirm(confirmOrDeclineRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmOrDeclineRequest** | [**ConfirmOrDeclineRequest**](ConfirmOrDeclineRequest.md)| The confirm or decline payout request | 

### Return type

[**ConfirmOrDeclineResult**](ConfirmOrDeclineResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="decline"></a>
# **decline**
> ConfirmOrDeclineResult decline(confirmOrDeclineRequest)

Decline a payout

You can decide over a period of seven days to cancel a payout, after which the payout expires automatically.

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PayoutApi();

var confirmOrDeclineRequest = new AdyenApiJs.ConfirmOrDeclineRequest(); // ConfirmOrDeclineRequest | The confirm or decline payout request

apiInstance.decline(confirmOrDeclineRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmOrDeclineRequest** | [**ConfirmOrDeclineRequest**](ConfirmOrDeclineRequest.md)| The confirm or decline payout request | 

### Return type

[**ConfirmOrDeclineResult**](ConfirmOrDeclineResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="storeDetailAndSubmit"></a>
# **storeDetailAndSubmit**
> StoreDetailAndSubmitResult storeDetailAndSubmit(storeDetailAndSubmitRequest)

Store the payouts details and make a payout request

Besides storing payout details using the normal payment flow, the payout web service offers a call to store payout details, either bank account or credit card, for a specific shopper and make a payout request in a single API call.

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PayoutApi();

var storeDetailAndSubmitRequest = new AdyenApiJs.StoreDetailAndSubmitRequest(); // StoreDetailAndSubmitRequest | The store detail and submit Request

apiInstance.storeDetailAndSubmit(storeDetailAndSubmitRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeDetailAndSubmitRequest** | [**StoreDetailAndSubmitRequest**](StoreDetailAndSubmitRequest.md)| The store detail and submit Request | 

### Return type

[**StoreDetailAndSubmitResult**](StoreDetailAndSubmitResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

