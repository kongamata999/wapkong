import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Head from "next/head"
export default function Home() {
  return (
    <>
    <Head>
      <title>หน้าแรก พยัคฆ์ก้องฟ้า ฟาร์มไก่ชน</title>
      <mata name="keywords" content="ไก่ชน ก๋อยง่อน พม่าง่อน"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>ซุ้มพยัคฆ์ก้องฟ้า</h1>
      <Image src="/ทีมเวิร์ก.jpg" width={1028} height={580} alt="logo"/>
    </div>
    </>
  )
}
