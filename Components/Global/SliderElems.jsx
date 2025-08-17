"use client";
import { useEffect, useRef, useState } from 'react'

export let SetSliderTransformValue, SlidermoveTo;
const Slider = ({ children, className, childWidth = 250 }) => {
    const [isMouseDown, setMouseDown] = useState(false);
    const [TransformVal, setTransformVal] = useState(0);
    const [LastPosition, setLastPosition] = useState(0);
    const [MouseUpPositiom, setMouseUpPositiom] = useState(0);
    const ContainerRef = useRef();
    const [ContainerRefWidth, setContainerRefWidth] = useState(null)

    useEffect(() => {
        ContainerRef.current &&
            setContainerRefWidth(ContainerRef.current?.scrollWidth);
    }, [])


    SlidermoveTo = (v, moveVal) => {
        let movingVal = moveVal ?? (childWidth ?? 300);
        setTransformVal(pv => {

            return v == "left"
                ? (
                    pv >= movingVal
                        ? pv - movingVal
                        : 0
                )
                : pv <= (ContainerRefWidth - movingVal)
                    ? pv + movingVal
                    : ContainerRefWidth - movingVal
        }
        )
    }



    const HandelMouseDown = e => {
        if (isMouseDown) {
            const x = e.clientX;
            setTransformVal(pv => pv >= 0
                ? (
                    (LastPosition - x + MouseUpPositiom) <= ContainerRefWidth - childWidth
                        ? LastPosition - x + MouseUpPositiom
                        : ContainerRefWidth - childWidth
                )
                : 0
            )
        }

    }
    return (
        <div
            onMouseMove={HandelMouseDown}
            onMouseDown={e => {
                setLastPosition(pv => LastPosition - e.clientX + MouseUpPositiom <= ContainerRefWidth ? e.clientX : pv);
                setMouseDown(true)
            }}
            onMouseUp={() => { setMouseUpPositiom(TransformVal); setMouseDown(false) }}
            onMouseLeave={() => { setMouseUpPositiom(TransformVal); setMouseDown(false) }}
            style={{
                transform: `translateX(-${TransformVal}px)`
            }}
            ref={ContainerRef}
            className={`${className}  flex selection:not-active: gap-4  ease-out duration-800 items-center justify-start`}>
            {
                children
            }

        </div>
    )
}

export default Slider
