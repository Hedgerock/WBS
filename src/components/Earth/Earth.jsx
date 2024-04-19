import React, { useEffect, useRef } from 'react';
import './Earth.css'
import { init3dEarth } from '../../utils/init3dEarth';

export const Earth = () => {
    const containerRef = useRef();

    useEffect(() => {
        init3dEarth(containerRef)
    }, []);

    return <div className='earth' ref={containerRef} />;
}
