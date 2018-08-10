# AdyenApiJs.RecurringDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalData** | **{String: String}** | This field contains additional data, which may be returned in a particular response. The additionalData object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to [RecurringDetail.additionalData](https://docs.adyen.com/developers/api-reference/recurring-api#recurringdetailadditionaldata). | [optional] 
**alias** | **String** | The alias of the credit card number. Applies only to recurring contracts storing credit card details | [optional] 
**aliasType** | **String** | The alias type of the credit card number. Applies only to recurring contracts storing credit card details. | [optional] 
**bank** | [**BankAccount**](BankAccount.md) |  | [optional] 
**billingAddress** | [**Address**](Address.md) |  | [optional] 
**card** | [**Card**](Card.md) |  | [optional] 
**contractTypes** | **[String]** | Types of recurring contracts. | [optional] 
**creationDate** | **Date** | The date when the recurring details were created. | [optional] 
**firstPspReference** | **String** | The &#x60;pspReference&#x60; of the first recurring payment that created the recurring detail. | [optional] 
**name** | **String** | An optional descriptive name for this recurring detail. | [optional] 
**paymentMethodVariant** | **String** | The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/developers/api-reference/common-api/paymentmethodvariant). | [optional] 
**recurringDetailReference** | **String** | The reference that uniquely identifies the recurring detail. | 
**shopperName** | [**Name**](Name.md) |  | [optional] 
**socialSecurityNumber** | **String** | A shopper&#39;s social security number (only in countries where it is legal to collect). | [optional] 
**variant** | **String** | The payment method, such as “mc\&quot;, \&quot;visa\&quot;, \&quot;ideal\&quot;, \&quot;paypal\&quot;. | 


