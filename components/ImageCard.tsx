import React from "react";
import styles from "@/styles/ImageCard.module.css";
import { ImageCarousel } from "./ImageCarousel";

type ImageCardProps = {
  images: string[];
};
export const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
  return (
    <div className={styles.imageCard}>
      <ImageCarousel images={images} />
      <div className={styles.description}>
        <div className={styles.titleRating}>
          <p>
            <strong>Location</strong>
          </p>
          <p>⭐️ Rating</p>
        </div>
        <p>Distance</p>
        <p>Dates </p>
        <p>Price</p>
      </div>
    </div>
  );
};
