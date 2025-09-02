import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      <img
        src="/images/04-01-dog.jpg"
        alt="강아지이미지"
        className={styles.나의이미지}
      />

      <Image
        src="/images/04-01-dog.jpg"
        alt="강아지이미지"
        className={styles.나의이미지}
        width={0}
        height={0}
        sizes="100vw"
      />
    </>
  );
}
