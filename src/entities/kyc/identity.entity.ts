import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "identity" })
class Identity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "user_address", type: "varchar", length: 255 })
  userAddress: string;

  @Column({ name: "passbase_id", type: "varchar", length: 255 })
  passbaseId: string;

  @Column({ type: "varchar", length: 255 })
  country: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Identity;
