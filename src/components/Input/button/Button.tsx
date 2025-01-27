import styles from './Button.module.css'

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button = ({
    children,
    onClick,
    className
}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;