import React from 'react'

const CardLayout = ({ children, customClassName = "h-full w-full" }) => {
    return (
        <div className={`${customClassName} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}
        // style={{
        //     backgroundImage: `url(images/card-bg.jpg)`,
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'inherit',
        //     backgroundPosition: 'right',
        //     width: '100%',
        // }}
        >
            {children}
        </div>
    )
}

export default CardLayout