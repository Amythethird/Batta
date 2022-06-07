import { PaginationResponse } from "./models/pagination-models";

/* Test Data, ToDo: remove */
export const entryResponse: any = JSON.parse(
  `{"data":{"shop":{"data":{"id":"1","attributes":{"name":"Lisas Klamotten","shop_owner":{"data":{"id":"2","attributes":{"firstname":"Laura"}}},"social_medias":{"data":[{"id":"1","attributes":{"platform":"facebook"}}]}}}}}}`
);
export const collectionResponse: any = JSON.parse(
  `{"data":{"shops":{"data":[{"id":"1","attributes":{"name":"Lisas Klamotten","shop_owner":{"data":{"id":"2","attributes":{"firstname":"Laura"}}},"social_medias":{"data":[{"id":"1","attributes":{"platform":"facebook"}}]}}},{"id":"3","attributes":{"name":"Verpacknix","shop_owner":{"data":null},"social_medias":{"data":[]}}},{"id":"2","attributes":{"name":"Cuisine végane!","shop_owner":{"data":null},"social_medias":{"data":[]}}}],"meta":{"pagination":{"page":1,"pageSize":10,"pageCount":1}}}}}`
);

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
    if (attributes[attribute].data !== null) {
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
