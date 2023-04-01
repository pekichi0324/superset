export interface InsightsRequestData {
  rows: Record<string, object>[];
  columns: InsightsRequestColumnInfo[];
}

export interface InsightsRequestColumnInfo {
  dataType: InsightsRequestDataType;
  name: string;
}

export enum InsightsRequestDataType {
  Number = 0,
  String = 1,
  DateTime = 2,
}
