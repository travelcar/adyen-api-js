# AdyenApiJs.Card

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingAddress** | [**Address**](Address.md) |  | [optional] 
**expiryMonth** | **String** | the month component of the expiry date (may be left padded with 0 for single digits) | 
**expiryYear** | **String** | the year component of the expiry date | 
**cvc** | **String** | the card security code which, depending on card brand, is referred to as CVV2/CVC2 (three digits) or CID (4 digits) | [optional] 
**holderName** | **String** | the cardholder name as printed on the card | 
**issueNumber** | **String** | &lt;i&gt;for some UK debit cards only&lt;/i&gt; the issue number of the card | [optional] 
**_number** | **String** | the card number (without separators) | 
**startMonth** | **String** | &lt;i&gt;for some UK debit cards only&lt;/i&gt; the month component of the start date | [optional] 
**startYear** | **String** | &lt;i&gt;for some UK debit cards only&lt;/i&gt; the year component of the start date | [optional] 


