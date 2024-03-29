import React, { useEffect, useState } from "react";
import styles from "@/styles/ImageCard.module.css";
import { ImageCarousel } from "./ImageCarousel";
import { Home } from "../types/Home";

type ImageCardProps = {
  home: Home;
};
export enum ComponentState {
  LOADING,
  ERROR,
  SUCCESS,
}
export const HomeCard: React.FC<ImageCardProps> = ({ home }) => {
  const [state, setState] = useState<ComponentState>(ComponentState.LOADING);
  const loading = state === ComponentState.LOADING;
  const LoadingSkeleton = () => {
    return (
      <div>
        <div className={styles.loadingTitle}></div>
        <div className={styles.loadingItem}></div>
        <div className={styles.loadingItem}></div>
        <div className={styles.loadingItem}></div>
      </div>
    );
  };
  return (
    <div className={styles.imageCard}>
      <ImageCarousel
        images={home.images}
        onLoadComplete={() => setState(ComponentState.SUCCESS)}
        loading={loading}
      />
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className={`${styles.description} `}>
          <div className={`${styles.titleRating} `}>
            <p>
              <strong>{`${home.city.name}, ${home.city.state}`}</strong>
            </p>
            <p className={`${styles.rating}`}>
              {"\u2605"} {home.avgRating.toFixed(2)}
            </p>
          </div>
          <p>{home.distance} miles away</p>
          <p>{home.dates} </p>
          <p>
            <strong>${home.pricePerNight}</strong> night
          </p>
        </div>
      )}
    </div>
  );
};
