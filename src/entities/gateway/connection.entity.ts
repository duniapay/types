import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ActionType } from "../../enums";

/**
 * @class Connection
 * This class represents merchant connection info to Payments Gateway.
 */
@Entity({ name: "connection" })
class Connection {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "key_used", type: "varchar", length: 255 })
  keyUsed: string;

  @Column({ name: "is_prod", type: "boolean" })
  isProd: boolean;

  @Column({ name: "action_type", type: "enum", enum: ActionType })
  actionType: ActionType;

  @Column({ name: "action_reference", type: "varchar", length: 255 })
  actionReference: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Connection;
