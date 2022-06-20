import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./user.entity";

/**
 * @class Connection
 * This class represents merchant connection info to Payments Gateway.
 */
@Entity({ name: "account" })
class Account {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;
}

export default Account;
