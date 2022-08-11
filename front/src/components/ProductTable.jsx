import { createResource, createSignal, For, Show } from "solid-js";
import Box from "@suid/material/Box";
import Paper from "@suid/material/Paper";
import Table from "@suid/material/Table";
import TableBody from "@suid/material/TableBody";
import TableCell from "@suid/material/TableCell";
import TableContainer from "@suid/material/TableContainer";
import TableHead from "@suid/material/TableHead";
import TableRow from "@suid/material/TableRow";
import AddIcon from "@suid/icons-material/Add";

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
            <TableRow>
              <TableCell>Hi</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <For each={Data()}>
        {(data) => (
          <table class={styles.table}>
            {LongestValue(data.product_table)}
            <tbody class={styles.tableBody}>
              <For each={data.product_table}>
                {(row) => (
                  <tr>
                    <Show
                      when={row.length === Length()}
                      fallback={
                        <For each={row}>
                          {(cell) => <td colspan={`${Length()}`}>{cell}</td>}
                        </For>
                      }
                    >
                      <For each={row}>
                        {(cell) => (
                          <td>
                            {cell}
                            <AddIcon sx={{ width: "20px" }} />
                          </td>
                        )}
                      </For>
                    </Show>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        )}
      </For> */}
    </Box>
  );
}

export default ProductTable;
