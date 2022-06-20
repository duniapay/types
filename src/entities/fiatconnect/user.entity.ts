import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * @class User
 * This class represents FiatConnect users details.
 */
@Entity({ name: "user" })
class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "crypto_address", type: "varchar", length: 255 })
  userAddress: string;

  @Column({ name: "last_connection", type: "datetime", nullable: true })
  lastConnection?: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default User;
