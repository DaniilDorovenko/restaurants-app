import classNames from "classnames";
import styles from "./styles.module.scss"

export const Footer = ({ isDark }) => {
    return <footer className={classNames(styles.root, styles.footer, {
        [styles.dark]: isDark,
    }
        )} >Footer</footer>
};