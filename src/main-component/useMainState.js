import { useEffect, useRef, useState } from "react";


const useMainState = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [componentInfo, setComponentInfo] = useState({});
    const paragraphRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        let finalState = { ...componentInfo };
        if (paragraphRef.current) {
            const lh = parseInt(window.getComputedStyle(paragraphRef.current).lineHeight);
            const eh = paragraphRef.current.clientHeight;
            const noOfline = Math.round(eh / lh);
            const lines = Array(noOfline).fill({
                height: lh,
                width: paragraphRef.current.clientWidth
            })
            finalState.lineCount = noOfline;
            finalState.lines = lines;
        }

        if (imageRef.current) {
            const { width, height } = imageRef.current.getBoundingClientRect();
            finalState.image = {
                width,
                height
            }
        }

        setComponentInfo({ ...finalState })

    }, [])

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, [])


    return {
        isLoading,
        setIsLoading,
        componentInfo,
        setComponentInfo,
        paragraphRef,
        imageRef
    }
}

export default useMainState;