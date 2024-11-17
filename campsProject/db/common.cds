namespace Kapildb.common;
using { Currency } from '@sap/cds/common';

   type ID : String(30);
    
    type Gender : String(1) enum{
      male ='M';
      female ='F';

    }
       type AccountT : Decimal(10, 2) @ (
       Semantic.amount.currencyCode: 'CURRENCY_code',
       sap.unit: 'CURRENCY_code'
       );
     
     aspect amount {
      CURRENCY : Currency;
      GROSS_AMOUNT :AccountT @(title : 'Gross Amount');
      NET_AMOUNT :AccountT @(title : 'Net Amount');
      TAX_AMOUNT :AccountT @(title : 'Tax Amount');
     }

    type Guid : String(20);

   type PhoneNumber : String(30)
  @assert.format : '^\\+?[0-9 ]{7,30}$';
    
    type EmailID : String(254)
  @assert.format :  '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
    
    aspect address {
      CLASS : Int32
     
    }