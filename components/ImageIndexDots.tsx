import styles from "./ImageIndexDots.module.css";
type ImageIndexDotsProps = {
  numberOfImages: number;
  currentIndex: number;
};
export const ImageIndexDots: React.FC<ImageIndexDotsProps> = ({
  numberOfImages,
  currentIndex,
}) => {
  return (
    <>
      <div className={styles.dots}>
        {Array(numberOfImages)
          .fill(0)
          .map((_, i) => (
            <svg
              className={currentIndex === i ? styles.active : styles.normal}
              key={i}
              width="8"
              height="8"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r={4} />
            </svg>
          ))}
      </div>
    </>
  );
};
