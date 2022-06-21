import Edit from "./edit"
import Image from "./image"

/**
 * Okay so, I THINK what happens is that when we select an image in the editor with onSelectMedia, withSelect automatically
 * updates the media prop to the new image.
 */

console.log("running index.js")

// Wrapper's job is basically just to bundle the Image and Edit panel, since we can only pass a single react component to withSelect.
// Unfortunately this means we end up with an awkward props.props, but I don't really see a way to stop that unless we wanna
// pass all the props individually.
function Wrapper(props) {
    return (
        <>
            <Image props={props} />
            <Edit props={props} />
        </>
    )
}

// Register the block
wp.blocks.registerBlockType("faylee/test-block", {
    title: "Faylee's test block",
    icon: "hammer",
    description: "describing the test block",
    category: "text",
    // Okay, so this function basically just has 1 job, which is to convert the mediaId into the media property.
    // The media property is then added to the props of Wrapper, which is called.
    edit: wp.data.withSelect((select, props) => {
        return {
            // IF there is a media target, GET the media from the database and call it media.
            media: props.attributes?.mediaId
                ? select("core").getMedia(props.attributes.mediaId)
                : undefined,
        }
    })(Wrapper),
    save: (props) => {
        // Okay, this function receives the attributes below and passes them to Image
        return <Image props={props} />
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
