import { members } from '../memberList';
import styles from './member.module.css';
import { FaUserAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Member() {
    return (
        <ul>
            {members.map((member) => (
                <li key={member.id} className={member.inTeam ? styles.active : styles.disabled}>
                    <p className={styles.user}>
                        <FaUserAlt className={styles.userIcon} />
                        {`${member.firstName} ${member.lastName}`}
                    </p>
                    <span>
                        {member.inTeam ? (
                            <FaRegCheckCircle className={styles.checkedIcon} />
                        ) : (
                            <FaRegCircleXmark className={styles.uncheckedIcon} />
                        )}
                    </span>
                </li>
            ))}
        </ul>
    );
}
