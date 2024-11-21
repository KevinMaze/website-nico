import NextLink from "next/link";
// import { title } from "@/fonts/font";s
import  style  from './Button.module.css'

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({label, href, onClick}) => {
    if (href) {
        return (
            <div >
                <div className={style.container}>
                    <NextLink href={href} passHref className={style.btn}>{label}</NextLink>
                </div>
            </div>
        );
    }

    return (
        <button onClick={onClick} className="btn">
            {label}
        </button>
    );
}