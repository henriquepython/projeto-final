import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable({ scope: Scope.REQUEST })
export class UserRepository {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email: email });
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: user },
      { new: true },
    );
  }

  async remove(id: string): Promise<void> {
    await this.userModel.deleteOne({ _id: id }).exec();
  }
}
