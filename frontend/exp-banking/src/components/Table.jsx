import { React, useMemo } from 'react';
import {
  useMaterialReactTable,
  MRT_Table,
} from 'material-react-table';

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
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default,
    }),
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        caption: {
          captionSide: 'top',
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
        fontStyle: 'italic',
        fontWeight: 'normal',
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
      },
    },
  });

  return <MRT_Table table={table} />;
};

export default LoanTable;