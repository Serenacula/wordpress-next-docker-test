export default function Image(wrapperProps) {
    const props = wrapperProps.props
    console.log(props)
    const blockStyle = {
        width: "100%",
        height: "400px",
    }
    return (
        <img
            className="save image"
            src={
                props.attributes.mediaUrl != "" ? props.attributes.mediaUrl : ""
            }
            alt=""
            style={blockStyle}
        />
    )
}
