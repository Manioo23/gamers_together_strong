import * as React from 'react';
import './Overlay.scss'
import Toast, { IToastProps } from './Toast';

interface IOverlayProps {

}

interface IOverlayState {
    toasts: Array<IToastProps>,
    counter: number
}

enum TIME {
    SHORT = 2000,
    MEDIUM = 5000,
    LONG = 10000,
}

class Overlay extends React.Component<IOverlayProps, IOverlayState> {
    private static instance: Overlay;
    constructor(props: IOverlayProps) {
        super(props);

        if(Overlay.instance) {
            return Overlay.instance
        }
        Overlay.instance = this;

        this.state = {
            toasts: [],
            counter: 0,
        }
    }
    
    public pushToast = (toastProps: IToastProps & {time?: TIME}) => {
        this.setState({
            toasts: [...this.state.toasts, toastProps],
            counter: this.state.counter + 1,
        })

        setTimeout(this.popToast, toastProps.time || TIME.MEDIUM)
    }

    public popToast = () => {
        this.setState({
            toasts: this.state.toasts.slice(1)
        });
    }

    private prepareToasts = () => {
        return this.state.toasts.map((v: IToastProps, i: number) => <Toast key={i} {...v}/>);
    }

    render() {
        return (
            <div className={'overlay'} onClick={() => this.pushToast({value: `Error ${this.state.counter}`, time: TIME.SHORT})}>
                {this.prepareToasts()}
            </div>
        )
    }
}

export default Overlay;