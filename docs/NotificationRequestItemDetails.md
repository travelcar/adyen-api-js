# AdyenApiJs.NotificationRequestItemDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **Object** | a map of name/value pairs for passing in additional/industry-specific data | [optional] 
**amount** | [**Amount**](Amount.md) |  | 
**pspReference** | **String** | the unique identifier associated with the transaction/the request | 
**eventCode** | [**EventCode**](EventCode.md) |  | 
**eventDate** | **Date** | The time when the event was generated. | 
**merchantAccountCode** | **String** | The merchant account identifier used in the transaction the notification item refers to. | 
**operations** | **[String]** | This field holds a list of the modification operations supported by the transaction the notification item refers to. | 
**merchantReference** | **String** | A reference to uniquely identify the payment. | 
**originalReference** | **String** | The originalReference value corresponds to the  pspReference value assigned to the original payment, it&#39;s populated only if is about Modification request | [optional] 
**paymentMethod** | **String** | The payment method used in the transaction the notification item refers to. | 
**reason** | **String** | This field holds plain text. The value varies depending on whether the outcome of the event is successful or not ( | [optional] 
**success** | **Boolean** | Informs about the outcome of the event (eventCode) the notification refers to, if true then the event (eventCode) the notification refers to was executed successfully, else if false then the event was not executed successfully. | 


<a name="[OperationsEnum]"></a>
## Enum: [OperationsEnum]


* `CANCEL` (value: `"CANCEL"`)

* `CAPTURE` (value: `"CAPTURE"`)

* `REFUND` (value: `"REFUND"`)




