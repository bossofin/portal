import { CreateUserPayload } from './create-user-payload.interface';

export interface UpdateUserPayload extends Partial<CreateUserPayload> {
  id: number;
}
