import * as React from 'react';


export interface IToastProps {
    value: string,
    size?: 'small' | 'medium' | 'large',
    intend?: 'log' | 'warning' | 'error',
}

const Toast: React.FC<IToastProps> = ({value, size='medium', intend='log'}) => {
    return (
        <div className='toast'>
            {value}
        </div>
    )
}

Toast.displayName = 'Toast';
export default Toast;