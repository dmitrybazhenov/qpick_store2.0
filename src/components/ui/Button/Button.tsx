import { FC } from 'react'
import styles from './Button.module.scss'
import { IButtonProps } from './Button.interface'
import classNames from 'classnames'

const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return <button {...props} className={classNames(styles.button, { [`${props.className}`]: props.className })}>{children}</button>
}

export default Button