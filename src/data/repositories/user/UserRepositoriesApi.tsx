import apiClient from "@/data/datasources/api/apiClient";
import { UserRoles, type User, type UserRole } from "@/domain/entities/user/User";
import type { UserRepository } from "@/domain/repositories/user/UserRepository";

export class UserApiRepository implements UserRepository {

  private mapRole(role: string): UserRole {
    switch (role) {
      case "admin":
        return UserRoles.Administrator;
      case "director":
        return UserRoles.Owner;
      default:
        return UserRoles.User;
    }
  }
  async getMe(): Promise<User> {
    const response = await apiClient.get("/auth/checkuser/");
    return {
      id: response.data.id,
      fullname: response.data.fio,
      role: this.mapRole(response.data.role),
    };
  }
  async register(fio: string, schoolId: string): Promise<void> {
    const initDatas = window.Telegram?.WebApp?.initData;

    return apiClient.post("/auth/start/", {
      fio: fio,
      schoolId: schoolId,
      initData: initDatas
    });
  }

}