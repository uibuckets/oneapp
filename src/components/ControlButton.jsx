
import { useEffect, useState } from 'react';

export const ControlButton = (props) => {
    const [selected, setSelected] = useState(props.selected || props.alwaysselected);
    useEffect(() => {
        setSelected(props.selected || props.alwaysselected);
    }, [props.selected])

    const onClickControl = () => {
        setSelected(!selected || props.alwaysselected)
    }

    const icon = props.icon;
    const title = props.title;
    const subtitleselected = props.subtitleselected;
    const subtitle = props.subtitle;
    const arrow = props.arrow;
    const className = " select-none flex  w-full  relative items-center cursor-pointer " + (props.className || " pl-2.5 pr-1  ");

    return (<div className={className} onClick={onClickControl} >
        {icon &&
            <div className={"w-7 h-7 rounded-full flex justify-center items-center min-w-fit min-h-fit " + (selected ? " bg-blue-500" : "bg-white bg-opacity-10")}>
                {<img src={icon} className={selected ? "opacity-100" : "opacity-60"} />}
            </div>
        }
        {(title || subtitle || subtitleselected) && <div className={(icon ? "ml-2.5 " : "") + "flex flex-col "}>
            {title && <h4 className="select-none  p-0 text-white font-macfont text-tiny font-medium leading-4">{title}</h4>}
            {subtitle && (!subtitleselected || !selected) && <h4 className="select-none   p-0 text-white text-opacity-50 font-macfont text-macro font-normal leading-3">{subtitle}</h4>}
            {subtitleselected && selected && <h4 className="select-none  p-0 text-white text-opacity-50 font-macfont text-macro font-normal leading-3">{subtitleselected}</h4>}

        </div>}
        {arrow && <img className={(icon ? "right-2.5 " : "right-1 ") + 'absolute'} src={arrow} />}
    </div >)
}