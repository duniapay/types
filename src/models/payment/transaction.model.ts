import { TransactionType } from "../../enums";

interface TransactionModel {
  id: number;
  userAddress?: string;
  transactionId: string;
  quoteId?: string;
  reference: string;
  country: string;
  provider?: string;
  transactionType: TransactionType;
  fiatType?: string;
  cryptoType?: string;
  fiatAmount?: number;
  cryptoAmount?: number;
  fees?: number;
  sender?: string;
  receiver?: string;
  otp?: string;
  transactionStatus: string;
  transactionStatusDetails: string;
}

export default TransactionModel;
