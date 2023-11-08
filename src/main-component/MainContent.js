import React from "react";

const MainContent = ({
    imgSrc = '',
    paragraph = '',
    paragraphRef = null,
    imageRef = null,
}) => {
    return (
        <div>
            <header>
                <div className="image" ref={imageRef}>
                    <img src={imgSrc} alt="Image not able to load!!!" />
                </div>
            </header>

            <footer>
                <p className="para" ref={paragraphRef}>{paragraph}</p>
            </footer>
        </div>

    )
}

export default MainContent;