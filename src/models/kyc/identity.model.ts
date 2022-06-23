/**
 * @interface IdentityModel
 * This interface represents FiatConnect kyc details.
 */
interface IdentityModel {
  id: number;
  referenceId: string;
  passbaseId: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
}

export default IdentityModel;
