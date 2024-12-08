import NextLink from "next/link";
import style from "./Button.module.css";
import clsx from "clsx";

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
    label,
    href,
    onClick,
    variant = "primary",
}) => {
    if (href) {
        return (
            <div>
                <div className={style.container}>
                    <NextLink
                        href={href}
                        passHref
                        className={clsx(style.btn, style[variant])}
                    >
                        {label}
                    </NextLink>
                </div>
            </div>
        );
    }

    return (
        <button onClick={onClick} className={style.btn}>
            {label}
        </button>
    );
};
