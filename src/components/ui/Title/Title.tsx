import { FC } from 'react'
import { ITitleProps } from './Title.interface'

const Title: FC<ITitleProps> = ({ level, children, ...props }) => {
    switch (level) {
        case 1: return <h1{...props}>{children}</h1>;
        case 2: return <h2{...props}>{children}</h2>;
        case 3: return <h3{...props}>{children}</h3>;
    }
}

export default Title