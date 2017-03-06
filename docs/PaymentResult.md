# AdyenApiJs.PaymentResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authCode** | **String** | the authorisation code if the payment was successful | [optional] 
**paRequest** | **String** | the 3D request data for the issuer | [optional] 
**issuerUrl** | **String** | the URL to direct the shopper to | [optional] 
**md** | **String** | the payment session | [optional] 
**dccAmount** | [**Amount**](Amount.md) |  | [optional] 
**dccSignature** | **String** |  | [optional] 
**pspReference** | **String** | the unique reference that is associated with the payment | [optional] 
**resultCode** | [**ResultCode**](ResultCode.md) |  | [optional] 
**additionalData** | **Object** | a map of name/value pairs for passing in additional/industry-specific data | [optional] 
**refusalReason** | **String** | the mapped refusal reason | [optional] 
**fraudResult** | [**FraudResult**](FraudResult.md) |  | [optional] 


