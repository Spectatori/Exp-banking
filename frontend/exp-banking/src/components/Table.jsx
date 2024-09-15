import { React, useMemo } from 'react';
import { useMaterialReactTable, MRT_Table } from 'material-react-table';

export const LoanTable = ({ columns, data, enableBottomToolbar = false, enableStickyHeader = true, enablePagination = false }) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar,
    enableStickyHeader,
    enablePagination,
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

  return <MRT_Table table={table} />;
};

export default LoanTable;
