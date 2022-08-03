import { For, createResource, createSignal } from "solid-js";
import styles from "./Table.module.css";

function Table() {
  const [length, setLength] = createSignal(0);

  const [Data] = createResource(
    async () =>
      await fetch("http://127.0.0.1:8000/api/product-list/").then((res) =>
        res.json()
      )
  );

  return (
    <For each={Data()}>
      {(data) => (
        <table class={styles.table}>
          <tbody>
            <For each={data.product_table}>
              {(row) => (
                <tr>
                  <For each={row}>{(cell) => <td>{cell}</td>}</For>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      )}
    </For>
  );
}

export default Table;
