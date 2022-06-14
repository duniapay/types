import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserType } from "../../enums";

@Entity({ name: "user" })
class User {
  @PrimaryColumn()
  id: number;

  @Column({ name: "full_name", type: "varchar", length: 255 })
  fullName: string;

  @Column({ name: "user_type", enum: UserType, type: "enum" })
  userType: UserType;

  @Column({ name: "is_active", type: "boolean", default: false })
  isActive: boolean;

  @Column({ name: "is_verified", type: "boolean", default: false })
  isVerified: boolean;

  @Column({ name: "test_key", type: "varchar", length: 255 })
  testKey: string;

  @Column({ name: "prod_key", type: "varchar", length: 255 })
  prodKey: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default User;
