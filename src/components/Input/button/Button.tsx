import styles from './Button.module.css'

interface Props {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    onClick?: () => void;
    radius?: string
    width?: string;
  }
  
const Button = ({ 
        color,
        children,
        height,
        onClick, 
        radius,
        width
    }: Props) => { 
    return (
        <button className={styles.button}
        onClick={onClick}
        style={{
            backgroundColor: color,
            borderRadius: radius,
            height,
            width
        }}
        >
        {children}
        </button>
    );
}

export default Button;