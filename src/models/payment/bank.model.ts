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

/**
 * @interface MomoRecipient
 * This interface represents recipient (cashin | cashout) executed by our platform.
 */
interface BankRecipientModel {
  id: number;
  country: string;
  firstName: string;
  lastName: string;
  phone: string;
  institution_name: string;
  bank_account: string;
  branch_name?: string;
  address: string;
  city: string;
}

export { BankTransactionModel, BankRecipientModel };
