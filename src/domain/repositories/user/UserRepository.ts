import type { User } from "@/domain/entities/user/User";

export interface UserRepository {
  getMe(): Promise<User>;
  register(user: User): Promise<void>;
}