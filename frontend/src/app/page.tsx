import { Table } from "@/components/Table";
import { SAVED_PASSWORD_DISPLAY_TABLE_HEADERS } from "@/utility/constants";

export default function HomePage() {
  const tableData = [["Google", "PasswordManager", "Password", "Delete"]];

  return (
    <div>
      Home Page
      <Table
        tableHeaders={SAVED_PASSWORD_DISPLAY_TABLE_HEADERS}
        tableData={tableData}
      />
    </div>
  );
}
