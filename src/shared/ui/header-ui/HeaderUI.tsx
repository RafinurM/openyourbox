import { useLocation, useNavigate } from 'react-router-dom';
import style from './HeaderUI.module.scss';
import { Button } from '@/shared/components/Button';


export const HeaderUI = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const login = () => {
        navigate("/login")
        console.log(location)
    };
    return (
        <>
            <header className={style.header}>
                <h1 className={style.title}>open your box!</h1>
                <Button name='login' action={login}/>
            </header>
        </>
    )
}