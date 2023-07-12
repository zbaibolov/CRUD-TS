import { User } from "./types/user.type";

export class UserService {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async update(id: string, updatedUser: User): Promise<User | null> {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        this.users[i] = updatedUser;
        return updatedUser;
      }
    }
    return null;
  }

  async delete(id: string): Promise<{ message: string } | null> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return { message: "User deleted successfully!" };
    }
    return null;
  }
}
