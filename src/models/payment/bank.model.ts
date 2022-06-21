import { AccountType } from "../../enums";

/**
 * @interface BankTransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface BankTransactionModel {
  id: number;
  country: string;
  type: AccountType.BANK_ACCOUNT;
  accountId: string;
}

export default BankTransactionModel;
