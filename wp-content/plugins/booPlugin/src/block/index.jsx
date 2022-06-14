import edit from "./edit"
// const {registerBlockType} = wp.blocks

console.log("running index.js")

// Register the block
wp.blocks.registerBlockType("faylee/test-block", {
    title: "Faylee's test block",
    icon: "hammer",
    description: "describing the test block",
    category: "text",
    // withSelect is a higher order function that allows you to perform queries
    edit: wp.data.withSelect((edit, props) => {
        // const imageComponent = (
        //     <img
        //         src={attributes.mediaUrl != "" ? attributes.mediaUrl : ""}
        //         alt=""
        //         style={blockStyle}
        //     />
        // )

        return {
            media: props.attributes.mediaId
                ? edit("core").getMedia(props.attributes.mediaId)
                : undefined,
        }
    })(edit),
    save: () => {
        const props = wp.blockEditor.useBlockProps.save()
        console.log(props)
        return (
            <img
                className="save image"
                src={
                    props.attributes.mediaUrl != ""
                        ? props.attributes.mediaUrl
                        : ""
                }
                alt=""
                style={{
                    width: "100%",
                    height: "400px",
                }}
            />
        )
    },
    attributes: {
        mediaId: {
            type: "number",
            default: 0,
        },
        mediaUrl: {
            type: "string",
            default: "",
        },
    },
})
