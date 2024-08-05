export const Image= (prop) => {
    const {path,alter,height,width}=prop
    return (
        <>
        {
        <img 
        src={path}
        alt={alter}
        height={height}
        width={width}/>
        }
        </>
    )
}