import { React, useMemo } from 'react';
import { useMaterialReactTable, MRT_Table } from 'material-react-table';

export const LoanTable = ({ resultsArray }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'year',
        header: 'Years',
      },
      {
        accessorKey: 'monthlyPayment',
        header: 'Monthly',
      },
      {
        accessorKey: 'overallPayment',
        header: 'Overall Payment',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: resultsArray,
    enableBottomToolbar: false,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: false,
    muiTableBodyCellProps: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
      }),
    },
  });

  return <MRT_Table table={table} />;
};

export default LoanTable;
