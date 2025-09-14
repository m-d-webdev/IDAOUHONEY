

const RootLayout = ({ children, modal }) => {
    return (
        <html>
            <body>
                {children}
                {modal}
            </body>
        </html>
    )
}

export default RootLayout
