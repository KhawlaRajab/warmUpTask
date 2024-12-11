import styles from '../Buttons/Buttons.module.css'
export default function Buttons() {
    return (
        <>
            <div className='container'>
                <button className={styles.cancel}>Cancel</button>
                <button className={styles.save}>Save</button>
            </div>
        </>
    )
}