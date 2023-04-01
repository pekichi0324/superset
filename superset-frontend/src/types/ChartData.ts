export interface InsightsRequestData {
  rows: Record<string, object>[];
  columns: ColumnInfo[];
}

export interface ColumnInfo {
  dataType: DataType;
  name: string;
}

export enum DataType {
  Number = 0,
  String = 1,
  DateTime = 2,
}
