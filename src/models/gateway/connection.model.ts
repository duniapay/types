import { ActionType } from "../../enums";

/**
 * @interface ConnectionModel
 * This interface represents merchant connection info to Payments Gateway.
 */
interface ConnectionModel {
  id: number;
  merchantId: string;
  isProd: boolean;
  actionType: ActionType;
  actionReference: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default ConnectionModel;
