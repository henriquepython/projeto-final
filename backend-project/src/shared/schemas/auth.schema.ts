import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = AuthModel & Document;

@Schema()
export class AuthModel {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;
}

export const AuthSchema = SchemaFactory.createForClass(AuthModel);
