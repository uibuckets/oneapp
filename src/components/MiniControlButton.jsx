
import { useEffect, useState } from 'react';

export const MiniControlButton = (props) => {

    const [selected, setSelected] = useState(props.selected);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected])

    const onClickControl = () => {
        setSelected(!selected)
    }

    const icon = props.icon;
    const title = props.title;
    const subtitle = props.subtitle;
    const className = "select-none flex-col flex w-full justify-center relative items-center cursor-pointer " + (props.className || "");

    return (<div className={className} onClick={onClickControl} >
        <div className={"w-6 h-6 mt-2 rounded-full flex justify-center items-center min-w-fit min-h-fit "}>
            {icon && <img src={icon} />}
        </div>
        <div className="flex flex-col">
            {title && <h4 className="select-none text-white text-micro text-center leading-tight">{title}</h4>}
        </div>
    </div >)
}