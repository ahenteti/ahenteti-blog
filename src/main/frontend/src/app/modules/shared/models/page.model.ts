export class Page<T> {
  page: number;
  firstPage = true;
  lastPage = true;
  totalItems = 0;
  items: Array<T> = [];
}

export class PageApiResponse<T> {
  page: number;
  size: number;
  totalItems: number;
  lastPage: boolean;
  items: Array<T> = [];
}
