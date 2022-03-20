import Link from "next/link";
import styles from "./Footer.module.css";

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = ({ children }) => {
    return (
        <footer className={styles.footer}>
            <span className="periwinkle">© 2022 Josh Console</span>
            <span className={styles.divider + " teal"} />
            <Link href="https://www.eftech.com">
                <a className="periwinkle">My Team</a>
            </Link>
        </footer>
    );
};
