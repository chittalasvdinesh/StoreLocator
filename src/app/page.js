import styles from "./page.module.css";
import StoreLocator from "@/components/StoreLocator";


export default async function Home() {
  const res = await fetch('http://iabeta.in/abhishek/api/re.json');
  const data = await res.json()


  return (
    <div className={styles.store_page}>
      <StoreLocator data={data?.cityStateMap}/>
    </div>
  );
}
