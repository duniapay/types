/**
 * @interface UserModel
 * This interface represents FiatConnect users details.
 */
interface UserModel {
  id: number;
  cryptoAddress: string;
  lastConnection?: string;
}

export default UserModel;
