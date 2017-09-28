# AdyenApiJs.StoreDetailAndSubmitRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **Object** | a map of name/value pairs for passing in additional/industry-specific data | [optional] 
**amount** | [**Amount**](Amount.md) |  | 
**bank** | [**BankAccount**](BankAccount.md) |  | [optional] 
**billingAddress** | [**Address**](Address.md) |  | [optional] 
**card** | [**Card**](Card.md) |  | [optional] 
**dateOfBirth** | **Date** | the shopper&#39;s date of birth | [optional] 
**entityType** | [**PayoutEntityType**](PayoutEntityType.md) |  | 
**fraudOffset** | **Number** | the offset that is added to the normal fraud score (positive or negative) | [optional] 
**merchantAccount** | **String** | the merchant account which will be used for processing this request | 
**nationality** | **String** | The shopper&#39;s nationality, A valid value is an ISO 2-character country code (e.g. &#39;NL&#39;). | 
**recurring** | [**Recurring**](Recurring.md) |  | 
**reference** | **String** | the reference assigned to the payment | 
**selectedBrand** | **String** | The name of the brand to make a payout to. For Paysafecard it must be set to paysafecard. | [optional] 
**shopperEmail** | **String** | the email address of the shopper / customer | 
**shopperName** | [**Name**](Name.md) |  | 
**shopperReference** | **String** | a reference you use to uniquely identify the shopper (e.g. user ID or account ID) | 
**shopperStatement** | **String** | the text to appear on the shopper&#39;s statement | [optional] 


