import React from "react";

const SkeletonItem = ({
    width,
    height,
    customClassName = "skeleton",
}) => (
    <div className={customClassName} style={{ width: width, height: height }}></div>
)

export default SkeletonItem;