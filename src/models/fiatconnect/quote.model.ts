import { TransactionType } from "../../enums";

/**
 * @interface QuoteModel
 * This interface represents quotation estimation.
 */
interface QuoteModel {
  id: number;
  cryptoAddress?: string;
  country: string;
  fiatType: string;
  cryptoType: string;
  fiatAmount: number;
  cryptoAmount: number;
  fees: number;
  quoteFor: TransactionType;
  createdAt: string;
  updatedAt: string;
}

export default QuoteModel;
