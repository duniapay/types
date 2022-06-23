import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * @class Identity
 * This class represents FiatConnect kyc details.
 */
@Entity({ name: "identity" })
class Identity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "reference_id", type: "varchar", length: 255 })
  referenceId: string;

  @Column({ name: "passbase_id", type: "varchar", length: 255 })
  passbaseId: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  country?: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Identity;
