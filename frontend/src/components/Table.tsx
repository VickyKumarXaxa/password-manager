import { JSX } from "react";

type TableRowComponentType = (string | number | JSX.Element)[];

export function Table({
  tableHeaders,
  tableData,
}: {
  tableHeaders: string[];
  tableData: TableRowComponentType[];
}) {
  return (
    <div className="overflow-x-auto rounded border border-gray-300 shadow-sm dark:border-gray-600">
      <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
        <TableHeader tableHeaders={tableHeaders} />
        <TableBody tableRows={tableData} />
      </table>
    </div>
  );
}

function TableHeader({ tableHeaders }: { tableHeaders: string[] }) {
  return (
    <thead className="ltr:text-left rtl:text-right">
      <tr className="*:font-medium *:text-gray-900 dark:*:text-white">
        {tableHeaders.map((header) => (
          <th key={header} className="px-3 py-2 whitespace-nowrap">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody({ tableRows }: { tableRows: TableRowComponentType[] }) {
  return (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {tableRows.map((row, index) => (
        <TableRow key={index} tableRow={row} />
      ))}
    </tbody>
  );
}

function TableRow({ tableRow }: { tableRow: TableRowComponentType }) {
  return (
    <tr className="*:text-gray-900 *:first:font-medium dark:*:text-white">
      {tableRow.map((element, index) => (
        <td key={index} className="px-3 py-2 whitespace-nowrap">
          {element}
        </td>
      ))}
    </tr>
  );
}
