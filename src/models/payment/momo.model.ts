import { AccountType, TransactionStatus, TransactionType } from "../../enums";

/**
 * @interface MomoTransactionModel
 * This interface represents transactions(cashin | cashout) executed by our platform.
 */
interface MomoTransactionModel {
  id: number;
  country: string;
  provider: string;
  type: AccountType.MOBILE_MONEY;
  phone: string;
  accountId: string;
  otp?: string;
}

export default MomoTransactionModel;
