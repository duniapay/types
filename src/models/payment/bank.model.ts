import { AccountType, TransactionStatus, TransactionType } from "../../enums";

/**
 * @interface BankTransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface BankTransactionModel {
  id: number;
  country: string;
  type: AccountType;
  accountId: string;
}

export default BankTransactionModel;
