import Image from "next/image";
import { ButtonHTMLAttributes, useEffect } from "react";
import styles from "./Button.module.css";
type ButtonSide = { side: "right" | "left" };
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const ImageButton: React.FC<ButtonProps & ButtonSide> = ({
  side,
  ...rest
}) => {
  return (
    <button className={`${styles.button}  ${styles[side]}`} {...rest}>
      {/* circle svg */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx={12} cy={12} r="12" fill="white" />
      </svg>
      <Image
        className={styles.arrow}
        src={side === "right" ? "/ArrowRight.svg" : "/ArrowLeft.svg"}
        height={11}
        width={4}
        alt="arrow"
      />
    </button>
  );
};
