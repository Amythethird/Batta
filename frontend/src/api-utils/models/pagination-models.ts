export type Pagination = PaginationByPage | PaginationByOffset;

export interface PaginationByPage {
  page: number;
  pageSize: number;
}

export interface PaginationByOffset {
  start: number;
  limit: number;
}

export type PaginationResponse =
  | PaginationByPageResponse
  | PaginationByOffsetResponse;

export interface PaginationByPageResponse {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
}

export interface PaginationByOffsetResponse {
  start?: number;
  limit?: number;
}
