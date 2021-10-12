interface Filter {
  filter: string,
  filterValue: string
}

export interface ReportInputInterface {
  authenticationToken: string,
  from: Date,
  to: Date,
  timezone: string,
  conversionTimeMode: string,
  currency: string,
  sort: string,
  direction: string,
  columns: string[],
  groupBy: string,
  offset: number,
  limit: number,
  include: string,
  filters: Filter[]
}