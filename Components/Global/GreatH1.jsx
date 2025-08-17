
const GreatH1 = ({ children, className }) => {
    return (
        <h1
            style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}
            className={`${className} bg-gradient-to-b from-foreground to-foreground/40  font-bold text-4xl tracking-[-2]`}>
            {children}
        </h1>
    )
}

export default GreatH1
