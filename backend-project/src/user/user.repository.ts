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

  async findById(userId: string): Promise<User> {
    return await this.userModel.findById(userId);
  }

  async findByEmail(userEmail: string): Promise<User> {
    return await this.userModel.findOne({ email: userEmail });
  }

  async update(userId: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      { _id: userId },
      { $set: user },
      { new: true },
    );
  }

  async remove(userId: string): Promise<void> {
    await this.userModel.deleteOne({ _id: userId }).exec();
  }
}
