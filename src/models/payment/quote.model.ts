import { TransactionType } from "../../enums";

interface QuoteModel {
  id: number;
  userAddress: string;
  contry: string;
  fiatType: string;
  cryptoType: string;
  fiatAmount: number;
  cryptoAmount: number;
  fees: number;
  quoteFor: TransactionType;
}

export default QuoteModel;
