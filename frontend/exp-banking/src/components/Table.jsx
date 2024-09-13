import { React, useMemo } from 'react';
import { useMaterialReactTable, MRT_Table } from 'material-react-table';

export const LoanTable = ({ resultsArray }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'year',
        header: 'Години',
        size: 80, // Adjust size as needed
      },
      {
        accessorKey: 'monthlyPayment',
        header: 'Месечна такса',
        size: 100, // Adjust size as needed
      },
      {
        accessorKey: 'overallPayment',
        header: 'Крайна сума',
        size: 100, // Adjust size as needed
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: resultsArray,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    enablePagination: false,
    muiTableBodyCellProps: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],

      }),
    },
    muiTableHeadCellProps: {
      sx: {
        fontSize: '0.75rem',
        padding: '4px',
      },
    },
  });

  return  <MRT_Table table={table} />

};

export default LoanTable;
