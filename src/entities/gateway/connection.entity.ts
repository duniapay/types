import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "connection" })
class Connection {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "entity_id", type: "varchar", length: 255 })
  entityId: string;

  @Column({ type: "varchar", length: 255 })
  reference: string;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at", type: "datetime" })
  updatedAt: string;
}

export default Connection;
