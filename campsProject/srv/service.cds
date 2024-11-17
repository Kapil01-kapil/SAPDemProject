using { kapildb.demo as demo , kapildb.trainer as trainer } from '../db/demo';

service MyService {

    entity StudentSet as projection on demo.student;
     entity BooKSet as projection on demo.book;
 entity TrainerSet as projection on trainer.rentable;
}
