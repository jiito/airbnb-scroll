import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageIndexDots } from "../ImageIndexDots";
import { ImageButton } from "./Button";
import styles from "./index.module.css";

type ImageCarouselProps = {
  images: string[];
  onLoadComplete: () => void;
  loading: boolean;
};
export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  loading,
  onLoadComplete,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageLoader = ({ src, width }: { src: string; width: number }) => {
    return `${src}&fit=crop&w=${width}`;
  };

  return (
    <div className={styles.container}>
      {currentImage > 0 && !loading && (
        <ImageButton
          onClick={() => setCurrentImage((i) => (i - 1) % images.length)}
          side="left"
        />
      )}
      {currentImage < images.length - 1 && !loading && (
        <ImageButton
          onClick={() => setCurrentImage((i) => (i + 1) % images.length)}
          side={"right"}
        />
      )}
      <Image
        className={styles.image}
        loader={imageLoader}
        alt="Home image"
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 20vw"
        priority
        onLoadingComplete={onLoadComplete}
        placeholder="blur"
        blurDataURL="/ImagePlaceholder.svg"
        src={images[currentImage]}
      />
      {!loading && (
        <ImageIndexDots
          numberOfImages={images.length}
          currentIndex={currentImage}
        />
      )}
    </div>
  );
};
