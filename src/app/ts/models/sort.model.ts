export interface ISort<T> {
  key: keyof T;
  order?: 'asc' | 'desc';
}
