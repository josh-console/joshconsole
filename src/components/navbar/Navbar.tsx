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
                    <span style={{ fontWeight: 300 }}>josh</span>
                    <b>console</b>
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
