import { IoSearch } from "react-icons/io5";
import styles from './Search.module.css'

export default function SearchMember() {
    return (
        <>
            <div className={styles.container}>
            <IoSearch className={styles.searchIcon} />
            <input type="textbox"
                className={styles.searchBar}
                placeholder="Find Member" />
            </div>
        </>
        
    )
}