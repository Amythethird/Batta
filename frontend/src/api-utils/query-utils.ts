import { Filter } from "./models/filter-models";
import { Pagination, PaginationResponse } from "./models/pagination-models";

export function query(queryContent: string): string {
  return `query { ${queryContent} }`;
}

export function entry(
  entityName: string,
  id: number,
  fields: string[]
): string {
  return `${entryName(entityName, id)} { ${data(fields)} }`;
}

export function collection(
  entityName: string,
  fields: string[],
  filter?: {
    [fieldOrLogicalOperator: string]: Filter;
  },
  sort?: string | string[],
  pagination?: Pagination,
  paginationResponse?: PaginationResponse
): string {
  const paginationResponseString = JSON.stringify(paginationResponse);
  return `${collectionName(entityName, filter, pagination, sort)} { ${data(
    fields
  )}${
    paginationResponse
      ? `meta { pagination { ${paginationResponseString} } }`
      : ""
  } }`;
}

function entryName(entityName: string, id: number): string {
  return `${entityName}(${id})`;
}

function collectionName(
  entityName: string,
  filter?: {
    [fieldOrLogicalOperator: string]: Filter;
  },
  pagination?: Pagination,
  sort?: string | string[]
): string {
  const filterString = JSON.stringify(filter);
  const paginationString = JSON.stringify(pagination);
  const sortString = JSON.stringify(sort);

  const needsBraces = filter || pagination || sort;
  return `${entityName}${needsBraces ? "(" : ""}${
    filter ? `filter: ${filterString}, ` : ""
  }${pagination ? `pagination: ${paginationString}, ` : ""}${
    sort ? `sort: ${sortString}, ` : ""
  }${needsBraces ? ")" : ""}`;
}

function data(fields: string[]): string {
  return `data { id attributes { ${fields.join()} } }`;
}
