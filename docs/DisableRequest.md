# AdyenApiJs.DisableRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | [**Contract**](Contract.md) |  | [optional] 
**merchantAccount** | **String** | Your merchant account. | 
**recurringDetailReference** | **String** | The ID that uniquely identifies the recurring detail reference. If it is not provided, the whole recurring contract of the &#x60;shopperReference&#x60; will be disabled, which includes all recurring details. | [optional] 
**shopperReference** | **String** | The ID that uniquely identifies the shopper. This &#x60;shopperReference&#x60; must be the same as the &#x60;shopperReference&#x60; used in the initial payment. | 


