import MerchantModel from "./merchant.models";

/**
 * @interface MerchantDocumentModel
 * This interface represents Payments Gateway Merchant documents.
 */
interface MerchantDocumentModel {
  id: number;
  docType: string;
  docReference: string;
  merchant?: MerchantModel;
  updatedAt?: Date;
  createdAt?: Date;
}

export default MerchantDocumentModel;
