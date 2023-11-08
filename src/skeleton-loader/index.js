import React from "react";
import "./style.css";
import SkeletonItem from "./SkeletonItem";

const SkeletonLoader = ({
    image = {
        height: '0px',
        width: '0px'
    },
    lines = [],
}) => {
    return (
        <div className="skeleton-main">
            <header>
                <SkeletonItem width={image.width} height={image.height}/>
            </header>
            {lines.map((line, index) => <SkeletonItem key={index} width={line.width} height={line.height}/>)}
        </div>
    )
};

export default SkeletonLoader;