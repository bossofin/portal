export interface ApiResponseContainer<T> {
  statusCode: number;
  statusDescription: string;
  dataContainer: T;
}
