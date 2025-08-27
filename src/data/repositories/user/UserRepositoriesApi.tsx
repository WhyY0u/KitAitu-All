import { UserRoles, type User } from "@/domain/entities/user/User";
import type { UserRepository } from "@/domain/repositories/user/UserRepository";

export class UserApiRepository implements UserRepository {

  private fakeUser: User = {
    id: "1992381",
    fullname: "Иванов Иван",
    role: UserRoles.Administrator
  };
  async getMe(): Promise<User> {
    return this.fakeUser;
  }
  async register(user: User): Promise<void> {
    console.log("Фейковая регистрация:", user);
  }

}