
import { useEffect, useState } from 'react';

function IconButton(props) {

    const [selected, setSelected] = useState(props.selected || props.alwaysselected);

    useEffect(() => {
        setSelected(props.selected || props.alwaysselected);
    }, [props.selected])

    const onClickControl = () => {
        setSelected(!selected || props.alwaysselected)
    }

    const icon = props.icon;
    const className = " select-none flex  relative items-center cursor-pointer " + (props.className || " pl-2.5 pr-1  ");

    return (<div className={className} onClick={onClickControl} >
        <div className={"w-5 h-5 rounded-full flex justify-center items-center min-w-fit min-h-fit " + (selected ? " bg-blue-500" : "bg-white bg-opacity-10")}>
            {<img src={icon} className={selected ? "opacity-100" : "opacity-60"} />}
        </div>
    </div >)
}
export default IconButton;