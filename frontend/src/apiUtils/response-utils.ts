import { PaginationResponse } from "./models/pagination-models";

type EntryData = {
  id: string;
  attributes: { [key: string]: any };
};

export function parseResponse(
  entityName: string,
  response: {
    data: {
      [key: string]: {
        data: EntryData | EntryData[];
        meta?: { pagination: PaginationResponse };
      };
    };
  }
): { data: any; paginationResponse: PaginationResponse | undefined } {
  const paginationResponse = response.data[entityName].meta?.pagination;
  const dataContent = response.data[entityName].data;
  let result;

  if (dataContent instanceof Array) {
    result = parseCollectionResponse({ data: dataContent });
  } else {
    result = parseEntryResponse({ data: dataContent });
  }

  return { data: result, paginationResponse };
}

function parseEntryResponse(entryResponse: { data: EntryData }) {
  let result: any = {};

  result.id = parseInt(entryResponse.data.id, 10);

  const attributes = entryResponse.data.attributes;

  for (const attribute in attributes) {
    if (attributes[attribute] !== null && attributes[attribute].data !== null) {
      if (attributes[attribute].data instanceof Array) {
        result[attribute] = parseCollectionResponse(attributes[attribute]);
      } else if (attributes[attribute].data instanceof Object) {
        result[attribute] = parseEntryResponse(attributes[attribute]);
      } else {
        result[attribute] = attributes[attribute];
      }
    }
  }

  return result;
}

function parseCollectionResponse(collectionResponse: { data: EntryData[] }) {
  return collectionResponse.data.map((entry) =>
    parseEntryResponse({ data: entry })
  );
}
