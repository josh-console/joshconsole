import Link from "next/link";
import styles from "./Navbar.module.css";

export type NavbarProps = {
    section?: "blog" | "notes" | "thoughts";
};

export const Navbar: React.FC<NavbarProps> = ({ children, section }) => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a>
                    <span className="teal">josh</span>
                    <span className="periwinkle">console</span>
                </a>
            </Link>
            {section && (
                <>
                    <span className={styles.divider + " teal"} />
                    <Link href={"/" + section}>
                        <a className="periwinkle">{section}</a>
                    </Link>
                </>
            )}
        </nav>
    );
};
