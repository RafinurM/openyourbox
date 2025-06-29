import { ButtonUI } from "../../ui/button-ui/ButtonUI"


type TButtonProps = {
    name: string;
    action?: () => void;
    className?: string;
}
export  const Button = ({name, action, className} : TButtonProps) => {
    
    return <ButtonUI name={name} action={action} className={className}/>
}