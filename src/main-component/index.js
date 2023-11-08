import React, { useEffect, useState } from "react";
import SkeletonLoader from "../skeleton-loader";
import MainContent from "./MainContent";
import Content from "../mocks";
import "./style.css";
import useMainState from "./useMainState";
const MainComponent = () => {
    const {
        isLoading,
        componentInfo,
        paragraphRef,
        imageRef
    } = useMainState();

    return (
        <div className="container">
            {isLoading ?
                <SkeletonLoader image={componentInfo.image}
                    lines={componentInfo.lines}
                /> :
                // There two type of content change index to 1 see the lines loader is baed on no of lines of paragraph
                <MainContent {...Content[0]} paragraphRef={paragraphRef} imageRef={imageRef} />
            }
        </div>
    )
}

export default MainComponent