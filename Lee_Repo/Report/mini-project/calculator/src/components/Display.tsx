import styles from "./Display.module.css";

interface DisplayProps {
  value: string;
  expression?: string;
}

const Display = ({ value, expression }: DisplayProps) => {
  return (
    <div className={styles.Display}>
      <div className={styles.Expression}>{expression}</div>
      <div className={styles.DisplayValue}>{value}</div>
    </div>
  );
};

export default Display;
