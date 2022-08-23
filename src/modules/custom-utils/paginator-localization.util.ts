import { MatPaginatorIntl } from '@angular/material/paginator';

const turkishRangeLabel = (
  page: number,
  pageSize: number,
  length: number
): string => {
  if (length == 0 || pageSize == 0) {
    return `${length} den 0 `;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${length} satırdan ${
    startIndex + 1
  } - ${endIndex} arası gösteriliyor.`;
};

export const getTurkishPaginatorIntl = (): MatPaginatorIntl => {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Sayfa başına satır:';
  paginatorIntl.nextPageLabel = 'Sonraki';
  paginatorIntl.previousPageLabel = 'Önceki';
  paginatorIntl.lastPageLabel = 'Son';
  paginatorIntl.firstPageLabel = 'İlk';
  paginatorIntl.getRangeLabel = turkishRangeLabel;

  return paginatorIntl;
};
