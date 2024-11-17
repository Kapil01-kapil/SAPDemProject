namespace kapildb;
using { Kapildb.common as spler } from './common';
 using {cuid, temporal,managed  } from '@sap/cds/common';
 
context demo {
  

    entity  student :spler.address {
        key ID: spler.ID;
        NAME: String(30);
        CLASS:Int32
    
        
    }
      entity  book {
        key ID:spler.ID;
       BOOKNAME: String(30);
        
    
        
    }
}

context trainer {
  
  entity rentable:cuid, temporal , managed{
student:Association to demo.student;
book : Association to demo.book;
  }
}
