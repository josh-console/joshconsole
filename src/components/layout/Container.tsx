import styles from "./Container.module.css";

export type ContainerProps = {};

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};
