export class Page<T> {
  page: number;
  firstPage: boolean;
  lastPage: boolean;
  totalItems: number;
  items: Array<T> = [];
}

export class PageApiResponse<T> {
  page: number;
  size: number;
  totalItems: number;
  lastPage: boolean;
  items: Array<T> = [];
}
