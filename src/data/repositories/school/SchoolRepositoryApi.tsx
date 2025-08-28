import apiClient from "@/data/datasources/api/apiClient";
import type { School, SchoolType } from "@/domain/entities/school/School";
import type { SchoolRepository } from "@/domain/repositories/school/SchoolRepository";



export class SchoolRepositoryApi implements SchoolRepository {
    private mapType(type: string): SchoolType {
        switch (type) {
            case "School":
                return "Школа";
            case "College":
                return "Колледж";
            default:
                return "Колледж";
        }
    }
    async getUserSchool(): Promise<School> {
        const response = await apiClient.get("/auth/myschool");
        return {
            fullNameDirector: response.data.school.fullNameDirector,
            id: response.data.school.id,
            name: response.data.school.name,
            street: response.data.school.street,
            type: this.mapType(response.data.school.institutionType)
        }
    }
}
