import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Merchant from "./merchant.entity";

/**
 * @class MerchantDocument
 * This class represents merchant documents infos.
 */
@Entity({ name: "merchant_document" })
class MerchantDocument {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "doc_type", type: "varchar", length: 255 })
  docType: string;

  @Column({ name: "doc_reference", type: "varchar", length: 255 })
  docReference: string;

  @ManyToOne(() => Merchant, (merchant) => merchant.accounts)
  merchant: Merchant;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: Date;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: Date;
}

export default MerchantDocument;
