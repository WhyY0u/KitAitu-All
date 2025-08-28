export const SchoolType = {
  School: "Школа",
  College: "Колледж",
} as const;

export type SchoolType = typeof SchoolType[keyof typeof SchoolType];

export type School = {
  readonly id: string;
  readonly type: SchoolType;
  readonly name: string;
  readonly street: string;
  readonly fullNameDirector: string;
};