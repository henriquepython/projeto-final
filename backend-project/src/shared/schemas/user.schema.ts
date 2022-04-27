import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Roles } from '../../user/dto/roles.enum';

export type UserDocument = UserModel & Document;

@Schema()
export class UserModel {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  roles: Roles;

  @Prop({ type: String })
  password: string;

  @Prop({ type: Date, default: Date.now })
  created: Date;
}
export const UserSchema = SchemaFactory.createForClass(UserModel);
