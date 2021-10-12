export interface ReportInterface {
  totalRows: number,
  rows: [{[column: string]: [value: any]}]
}