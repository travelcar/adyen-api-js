# AdyenApiJs.ModificationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **String** | the reference assigned to this modification | [optional] 
**modificationAmount** | [**Amount**](Amount.md) |  | [optional] 
**authorisationCode** | **String** | the authorisation code of the payment (only required for the \&quot;authoriseReferral\&quot; method) | [optional] 
**originalReference** | **String** | the pspreference of the payment to modify | [optional] 
**merchantAccount** | **String** | the merchant account which will be used to process the payment | [optional] 
**additionalData** | **Object** | a map of name/value pairs for passing in additional / industry-specific data | [optional] 


