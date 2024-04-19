import { useEffect, useRef } from "react";
import { initAnimation } from "../utils/initAnimation";

export const useAnimateComponent = (className = '') => {
    const elementRef = useRef(null);
    useEffect(() => {
        initAnimation(elementRef, className)
    }, [className]);

    return elementRef
}