import { React, useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_Table,
} from 'material-react-table';

export const Table = ({resultsArray}) => {
  const columns = useMemo(
    () => [ 
      {
        accessorKey: 'year',
        header: 'Year',
      },
      {
        accessorKey: 'result',
        header: 'Result',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: resultsArray,
  });

  return <MRT_Table table={table} />;
};

export default Table;