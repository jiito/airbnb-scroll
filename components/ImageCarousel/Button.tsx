import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
export const ImageButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  buttonProps
) => {
  return (
    <button className={styles.button} {...buttonProps}>
      {/* circle svg */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx={12} cy={12} r="12" fill="red" />
      </svg>
    </button>
  );
};
