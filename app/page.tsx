'use client'

import { Publisher } from "@/publisher/publisher";
import styles from "./page.module.css";
import { Provider } from "@/common/state/consumer";

export default function Home() {

  return (
    <Provider>
      <div className={styles.page}>
        <Publisher/>
      </div>
    </Provider>
  );
}
