import { InsightsRequestData, DataType } from 'src/types/ChartData';

/*
 * Helper to process graph data to retrieve its insights.
 */
export function formatData(vis_type: any, queriesResponse: any):InsightsRequestData {
  let result: InsightsRequestData = { rows: [], columns: [] };
  let processingData = queriesResponse[0];

  if (processingData) {
    switch (vis_type) {
      case 'world_map': {
        result.columns = [
          {
            dataType: DataType.Number,
            name: processingData['form_data']['metric'],
          },
          { dataType: DataType.String, name: processingData['form_data']['entity'] },
        ];
        for (let entry of processingData.data) {

          let row = {} as Record<string, object>;
          for (let column of result.columns) {

            // Count value is labeled as "m1"
            if (column.dataType == DataType.Number)
            {
              row[column.name] = entry["m1"];
            }
            else {
              // country name is labeled as "name"
              row[column.name] = entry["name"] ?? "";

            }
          }
          result.rows.push(row);
        }
        
        break;
      }
      case 'table': {
        (processingData.colnames as string[]).forEach((value, index) => {
          result.columns.push({name:value, dataType: ((processingData.coltypes)[index] as DataType)});
        });
        result.rows = processingData.data;
        break;
      }
      default: {
        break;
      }
    }

    
  } else {
    console.log('queriesResponse.data is still not loaded');
  }

  return result;
}
