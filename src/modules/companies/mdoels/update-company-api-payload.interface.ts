import { CreateCompanyPayload } from './create-company-api-payload.interface';

export interface UpdateCompanyPayload extends CreateCompanyPayload {
  id: number;
}
