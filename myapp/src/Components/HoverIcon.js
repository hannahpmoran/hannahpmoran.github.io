import React, { useState } from 'react';

function IconWithHoverText({ iconContent, hoverText, style }) {
    // State variable to track hover state
    const [isHovered, setIsHovered] = useState(false);

    // Event handler for when the mouse enters the icon
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Event handler for when the mouse leaves the icon
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                ...style, // Spread any additional styles passed as props
            }}
            onMouseEnter={handleMouseEnter} // Add mouse enter event handler
            onMouseLeave={handleMouseLeave} // Add mouse leave event handler
        >
            {/* Icon content */}
            <div
                style={{
                    transition: 'filter 0.3s ease',
                    filter: isHovered ? 'blur(5px)' : 'none',
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #ccc'
                }}
            >
                {iconContent}
            </div>

            {/* Conditionally render text overlay */}
            {isHovered && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'// Semi-transparent background
                    }}
                >
                    {hoverText}
                </div>
            )}
        </div>
    );
}

export default IconWithHoverText;
