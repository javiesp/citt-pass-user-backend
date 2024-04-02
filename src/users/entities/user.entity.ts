import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop()
  uid_user: string

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: number;


  @Prop()
  major: string;

  @Prop()
  current_semester: number;

  @Prop()
  user_role: string;

  @Prop()
  proyect_id_mongo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);