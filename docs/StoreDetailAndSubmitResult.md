# AdyenApiJs.StoreDetailAndSubmitResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **Object** | This field contains additional data, which may be returned in a particular response. | [optional] 
**pspReference** | **String** | the unique identifier assigned to this modification. This reference is the pspReference of the payout. | 
**resultCode** | **String** | In case of success, it is payout-submit-received / payout-confirm-received / payout-decline-received. In case of an error, an informational message is returned. | 
**refusalReason** | **String** | In case of refusal, an informational message for the reason. | [optional] 


