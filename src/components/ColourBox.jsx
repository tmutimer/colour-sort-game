import React from "react";

function ColourBox({hue, saturation, lightness, grayscale}) {
    const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    const styles = {
        backgroundColor: bgColor,
        height: '100px',
        display: "inline-block",
    };

    if (grayscale) {
        styles.filter = 'grayscale(100%)';
    }

    return <div style={styles} className="w-[60px] md:w-[100px]"></div>;
}



export default ColourBox