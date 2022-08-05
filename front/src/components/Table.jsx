import { createResource, createSignal, For, Show } from "solid-js";
import styles from "./Table.module.css";

function Table() {
  const [Length, setLength] = createSignal();
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
    <>
      <For each={Data()}>
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
                          <>
                            <td>{cell}</td>
                          </>
                        )}
                      </For>
                    </Show>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        )}
      </For>
    </>
  );
}

export default Table;
