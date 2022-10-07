import { createResource, createSignal, Show, mapArray } from "solid-js";
import Box from "@suid/material/Box";
import Paper from "@suid/material/Paper";
import Table from "@suid/material/Table";
import TableBody from "@suid/material/TableBody";
import TableCell from "@suid/material/TableCell";
import TableContainer from "@suid/material/TableContainer";
import TableHead from "@suid/material/TableHead";
import TableRow from "@suid/material/TableRow";
import { dividerClasses } from "@suid/material/Divider";

function ProductTable() {
  const [Data] = createResource(
    async () =>
      await fetch("http://127.0.0.1:8000/api/product-list/").then((res) =>
        res.json()
      )
  );
  const LongestValue = (arr) => {
    setLength(arr.reduce((r, s) => (r > s.length ? r : s.length), 0));
  };

  const rows = [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }];

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mapArray(rows, (row) => (
              <div>{row}</div>
            ))}
            {/* <TableRow>
              <TableCell>Hi</TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProductTable;
