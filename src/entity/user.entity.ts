import { Role } from "src/enum/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "string", length: 150})
  name: string;

  @Column({type: "string", length: 150})
  email: string;

  @Column({type: "string", length: 10})
  contact: string;

  @Column({type: "string", length: 10})
  alternateContact: string;

  @Column({type: "enum", enum: Role})
  role: number;

}