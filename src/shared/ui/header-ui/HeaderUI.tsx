import style from './HeaderUI.module.scss';

export const HeaderUI = () => {
    return (
        <>
            <header className={style.header}>
                <h1 className={style.title}>open your box!</h1>
            </header>
        </>
    )
}