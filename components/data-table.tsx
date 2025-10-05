import type { ReactNode } from 'react';

interface Column<T> {
  header: string;
  accessor: (row: T) => ReactNode;
}

export function DataTable<T>({
  data,
  columns
}: {
  data: T[];
  columns: Column<T>[];
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-midnight/10 bg-white shadow-sm">
      <table className="min-w-full table-fixed border-collapse">
        <thead className="bg-midnight/5 text-left text-xs uppercase tracking-wider text-midnight/70">
          <tr>
            {columns.map((column) => (
              <th key={column.header} className="px-6 py-4">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-midnight/10 text-sm text-midnight/80">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-cloud/60">
              {columns.map((column) => (
                <td key={column.header} className="px-6 py-4 align-top">
                  {column.accessor(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
