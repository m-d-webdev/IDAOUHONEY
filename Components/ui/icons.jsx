
export const ConsoleIcon = ({ ...props }) => {
    return <img {...props} src="/media/icons/console.png" alt="" />
}
export const FacebookIcon = ({ ...props }) => {
    return <img {...props} src="/media/icons/facebook.png" alt="" />
}
export const GoogleIcon = ({ ...props }) => {
    return <img {...props} src="/media/icons/google.png" alt="" />
}
import React from 'react'

export const Star2 = ({ className, ...props }) => {
    return (

        <svg aria-hidden="true"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M17.286 21.09q -1.69 .001 -5.288 -2.615q -3.596 2.617 -5.288 2.616q -2.726 0 -.495 -6.8q -9.389 -6.775 2.135 -6.775h.076q 1.785 -5.516 3.574 -5.516q 1.785 0 3.574 5.516h.076q 11.525 0 2.133 6.774q 2.23 6.802 -.497 6.8" />
        </svg>

    )
}