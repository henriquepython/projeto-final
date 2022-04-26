import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @AutoMap()
  @Prop()
  name: string;

  @AutoMap()
  @Prop()
  email: string;

  @AutoMap()
  @Prop()
  phoneNumber: string;

  @Prop({ required: true, enum: ['ADMIN', 'USER'], default: 'USER' })
  role: string;

  @AutoMap()
  @Prop({ type: String, select: false })
  password: string;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
