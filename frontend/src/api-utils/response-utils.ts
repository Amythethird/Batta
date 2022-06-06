import { PaginationResponse } from "./models/pagination-models";

/* Test Data, ToDo: remove */
export const entryResponse: any = JSON.parse(
  `{"data":{"shop":{"data":{"id":"1","attributes":{"name":"Lisas Klamotten","shop_owner":{"data":{"id":"2","attributes":{"firstname":"Laura"}}},"social_medias":{"data":[{"id":"1","attributes":{"platform":"facebook"}}]}}}}}}`
);
export const collectionResponse: any = JSON.parse(
  `{"data":{"shops":{"data":[{"id":"1","attributes":{"name":"Lisas Klamotten","shop_owner":{"data":{"id":"2","attributes":{"firstname":"Laura"}}},"social_medias":{"data":[{"id":"1","attributes":{"platform":"facebook"}}]}}},{"id":"3","attributes":{"name":"Verpacknix","shop_owner":{"data":null},"social_medias":{"data":[]}}},{"id":"2","attributes":{"name":"Cuisine végane!","shop_owner":{"data":null},"social_medias":{"data":[]}}}],"meta":{"pagination":{"page":1,"pageSize":10,"pageCount":1}}}}}`
);

export type EntryOrCollectionData =
  | { id: number; attributes: {} }
  | Array<{ id: number; attributes: {} }>;

export function parseResponse(
  entityName: string,
  response: {
    data: { [key: string]: { data: EntryOrCollectionData } };
    meta?: { pagination: PaginationResponse };
  }
): any {
  const paginationResponse = response.meta?.pagination;
  const data = response.data[entityName].data;
  let result;

  if (data instanceof Array) {
    result = parseCollectionResponse(data);
  } else {
    result = parseEntryResponse(data);
  }

  return { data: result, paginationResponse };
}

function parseEntryResponse(entryResponse: { id: number; attributes: {} }) {
  let result: any = {};

  result.id = entryResponse.id;

  const attributes = entryResponse.attributes;

  for (const attribute in attributes) {
    if (
      // @ts-ignore
      attributes[attribute] instanceof Array
    ) {
      result[attribute] = parseCollectionResponse(
        attribute,
        // @ts-ignore
        attributes[attribute]
      );
    } else if (
      // @ts-ignore
      attributes[attribute] instanceof Object
    ) {
      result[attribute] = parseEntryResponse(
        attribute,
        // @ts-ignore
        attributes[attribute]
      );
    } else {
      // @ts-ignore
      result[attribute] = attributes[attribute];
    }
  }

  return result;
}

function parseCollectionResponse(
  collectionResponse: Array<{ id: number; attributes: {} }>
) {
  return collectionResponse.map((entry) => parseEntryResponse(entry));
}
