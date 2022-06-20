import { ActionType } from "../../enums";

/**
 * @interface ConnectionModel
 * This interface represents merchant connection info to Payments Gateway.
 */
interface ConnectionModel {
  id: number;
  keyUsed: string;
  isProd: boolean;
  actionType: ActionType;
  actionReference: string;
}

export default ConnectionModel;
