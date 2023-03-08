import Image from "next/image";
import { useState } from "react";
import { ImageButton } from "./Button";
import styles from "./index.module.css";

type ImageCarouselProps = {
  images: string[];
};
export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className={styles.container}>
      <ImageButton
        onClick={() => setCurrentImage((i) => (i + 1) % images.length)}
      />
      <Image
        style={{ position: "relative" }}
        alt=""
        src={images[currentImage]}
        width="400"
        height={400}
      />
      {/* <button >
        ⏭️
      </button> */}
    </div>
  );
};
