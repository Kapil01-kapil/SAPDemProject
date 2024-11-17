using { kapildb.db.demo, kapildb.db.transaction } from '../db/data-model';

service CatalogService @(path:'CatalogService') {
    entity BusinessPartnerSet as projection on demo.businesspartner;
    entity AddressSet as projection on demo.address;
    entity EmployeeSet as projection on demo.employees;
    entity ProductSet as projection on demo.product;
    entity POs as projection on transaction.purchaseorder;
    entity POItems as projection on transaction.poitems;
}