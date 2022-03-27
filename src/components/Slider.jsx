import React, { useState, useEffect, useRef } from "react";

export const Slider = (props) => {

    const inputSlideDiv = useRef(null);
    const inputSlideThumbDiv = useRef(null)
    const [sliderValue, setSliderValue] = useState(props.slidervalue);

    useEffect(() => {
        updateSliderValue(props.slidervalue);
    }, []);

    function updateSliderValue(argValue) {
        let numValue = argValue && argValue !== "" && !isNaN(argValue) ? argValue : 0;
        if (numValue < props.minimum) {
            numValue = props.minimum;
        }
        if (numValue > props.maximum) {
            numValue = props.maximum;
        }
        let percentValue = ((numValue - props.minimum) / (props.maximum - props.minimum)) * 100;
        let _w = Math.min(inputSlideDiv.current.parentElement.offsetWidth, (inputSlideDiv.current.parentElement.offsetWidth / 100) * parseFloat(percentValue));
        inputSlideDiv.current.style.width = Math.min(_w + 20, inputSlideDiv.current.parentElement.offsetWidth) + "px";
        inputSlideThumbDiv.current.style.left = Math.min(1 + _w, inputSlideDiv.current.parentElement.offsetWidth - 20) + "px";
        setSliderValue(numValue);
    }

    function dispatchChangeEvent(boolDragging, numSliderValue) {
        updateSliderValue(numSliderValue);
        const strChangeFn = boolDragging ? "onchanging" : "onchange";
        if (props.hasOwnProperty(strChangeFn) && props[strChangeFn]) {
            props[strChangeFn]({ data: props.data, value: numSliderValue, dragging: boolDragging, property: props.data });
        }
        console.log(numSliderValue)
    }

    function changeHandler(event) {
        dispatchChangeEvent(true, event.target.value);
    }

    function dragReleaseHandler(event) {
        dispatchChangeEvent(false, event.target.value);
    }

    return (
        <div className={"w-full relative min-w-min flex flex-col"}>
            {props.showlabel && (
                <div className="relative w-full h-5">
                    <span className="text-gray-800 text-sm absolute left-0">{props.minimum}</span>
                    <span className="text-gray-800 text-sm absolute right-0">{props.maximum}</span>
                </div>
            )}
            <div className="relative w-full h-6">
                <div className="absolute bg-black bg-opacity-20 shadow-sm w-full  overflow-hidden rounded-full max-w-full" style={{ padding: "1px", height: "22px" }}>
                    <div className="w-full overflow-hidden h-full" >
                        <div ref={inputSlideDiv} className="h-5 absolute bg-white rounded-full" >
                        </div>
                        <div ref={inputSlideThumbDiv} className=" h-5 w-5 absolute bg-white shadow-md rounded-full"></div>
                    </div>
                </div>

                <input
                    className=" absolute top-2 w-full"
                    type="range"
                    min={props.minimum}
                    max={props.maximum}
                    step={props.stepsize}
                    value={sliderValue}
                    onChange={changeHandler}
                    onInput={changeHandler}
                    onMouseUp={dragReleaseHandler}
                />
            </div>
        </div>
    );
};

Slider.defaultProps = {
    onchanging: null,
    stepsize: 1,
    data: "",
    minimum: 0,
    maximum: 100,
    slidervalue: 0
};

export default Slider;
