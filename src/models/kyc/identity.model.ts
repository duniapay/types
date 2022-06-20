/**
 * @interface IdentityModel
 * This interface represents FiatConnect kyc details.
 */
interface IdentityModel {
  id: number;
  cryptoAddress: string;
  passbaseId: string;
  country?: string;
}

export default IdentityModel;
