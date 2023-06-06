import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="Keywords" conntent="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero beatae
          nesciunt nisi. Illo natus cum impedit iste maxime mollitia, error
          corrupti. Hic omnis nobis cupiditate nam sint. Ipsum, iure aliquam?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero beatae
          nesciunt nisi. Illo natus cum impedit iste maxime mollitia, error
          corrupti. Hic omnis nobis cupiditate nam sint. Ipsum, iure aliquam?
        </p>
        <Link href={"/ninjas"} className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
