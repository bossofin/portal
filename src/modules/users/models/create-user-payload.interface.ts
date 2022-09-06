export interface CreateUserPayload {
  userName: string;
  password: string;
  activationStatus: 1 | 0;
  companyId: number;
}
