import type { School } from "@/domain/entities/school/School";


export interface SchoolRepository {
  getUserSchool(): Promise<School>;
}