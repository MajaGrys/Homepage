import React from "react";
import { useState, useEffect, useRef, createRef } from "react";

interface LazyLoadWrapperProps {
    options?: IntersectionObserverInit;
    children?: React.ReactNode; //typeof React.Children;
}

const defaultOptions:IntersectionObserverInit = {
    root: null,
    threshold: 0,
    rootMargin: '100px',
}

export const LazyLoadWrapper:React.FC<LazyLoadWrapperProps> = ({options=defaultOptions, children}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const divRef:React.RefObject<HTMLDivElement> = createRef()
    useEffect(() => {
        const io = new IntersectionObserver((entries, observer) => {
            const refEntryElement = entries.find(entry => entry.target === divRef.current)
            const isIntersecting = refEntryElement?.isIntersecting
            if (isIntersecting) {
                setIsLoaded(true)
                observer.disconnect()                
                console.log('zzzzzzzzzzzzzz', entries)
            }
        }, options)
        if (divRef.current) {io.observe(divRef.current!)}
        return () => {
            io.disconnect()
        }
    }, [])
    return isLoaded?<>{children}</>:<div ref={divRef} style={{minHeight: '1px'}}/>
}

export default LazyLoadWrapper