import { AccountType, TransactionStatus, TransactionType } from "../../enums";

/**
 * @interface TransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface TransactionModel {
  id: number;
  transactionId: string;
  reference: string;
  country: string;
  provider?: string;
  transactionType: TransactionType;
  fees?: number;
  accountType: AccountType;
  mobileMoneyAccount?: string;
  bankAccount?: string;
  ibanAccount?: string;
  otp?: string;
  transactionStatus: TransactionStatus;
  transactionStatusDetails?: string;
}

export default TransactionModel;
