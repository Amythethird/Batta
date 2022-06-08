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
  page?: boolean;
  pageSize?: boolean;
  pageCount?: boolean;
  total?: boolean;
}

export interface PaginationByOffsetResponse {
  start?: boolean;
  limit?: boolean;
}
