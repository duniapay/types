import { ConversionType } from "../../enums";

/**
 * @interface ConversionModel
 * This interface represents FiatConnect conversion (crypto to fiat/Fiat to crypto).
 */
interface ConversionModel {
  id: number;
  cryptoAdress: string;
  quoteId: number;
  referenceTransaction?: string;
  conversionType: ConversionType;
  country: string;
  fiatType: string;
  cryptoType: string;
  fiatAmount: number;
  cryptoAmount: number;
  fees: number;
  createdAt: string;
  updatedAt: string;
}

export default ConversionModel;
