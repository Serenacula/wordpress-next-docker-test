const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor
const { PanelBody, Button, ResponsiveWrapper } = wp.components

export default function edit(props) {
    const { attributes, setAttributes } = props

    const removeMedia = () => {
        props.setAttributes({
            mediaId: 0,
            mediaUrl: "",
        })
    }

    const onSelectMedia = (media) => {
        props.setAttributes({
            mediaId: media.id,
            mediaUrl: media.url,
        })
    }

    const blockStyle = {
        width: "100%",
        height: "400px",
    }

    return (
        <>
            {/* InspectorControls is what renders in the sidebar */}
            <InspectorControls>
                {/* PanelBody makes the sidebar thing collapsible */}
                <PanelBody title={"Select the image"} initialOpen={true}>
                    <div className="editor-post-featured-image">
                        {/* Wrapper to check if user has access to library */}
                        <MediaUploadCheck>
                            {/* Media upload panel */}
                            <MediaUpload
                                onSelect={onSelectMedia}
                                value={attributes.mediaId}
                                // Only allow images when selecting media
                                allowedTypes={["image"]}
                                // How to actually render this component
                                render={({ open }) => (
                                    <Button
                                        className={
                                            attributes.mediaId == 0
                                                ? "editor-post-featured-image__toggle"
                                                : "editor-post-featured-image__preview"
                                        }
                                        onClick={open}
                                    >
                                        {attributes.mediaId == 0 &&
                                            "Choose an image"}
                                        {props.media != undefined && (
                                            <ResponsiveWrapper
                                                naturalWidth={
                                                    props.media.media_details
                                                        .width
                                                }
                                                naturalHeight={
                                                    props.media.media_details
                                                        .height
                                                }
                                            >
                                                <img
                                                    src={props.media.source_url}
                                                />
                                            </ResponsiveWrapper>
                                        )}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {/* This is a button that replaces the image you choose */}
                        {attributes.mediaId != 0 && (
                            <MediaUploadCheck>
                                <MediaUpload
                                    title={"Replace image"}
                                    value={attributes.mediaId}
                                    onSelect={onSelectMedia}
                                    allowedTypes={["image"]}
                                    render={({ open }) => (
                                        <Button
                                            onClick={open}
                                            isDefault
                                            isLarge
                                        >
                                            {"Replace image"}
                                        </Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        )}
                        {/* This is a button that removes the current image */}
                        {attributes.mediaId != 0 && (
                            <MediaUploadCheck>
                                <Button
                                    onClick={removeMedia}
                                    isLink
                                    isDestructive
                                >
                                    {"Remove image"}
                                </Button>
                            </MediaUploadCheck>
                        )}
                    </div>
                </PanelBody>
            </InspectorControls>
            <img
                className="edit image"
                src={attributes.mediaUrl != "" ? attributes.mediaUrl : ""}
                alt=""
                style={blockStyle}
            />
        </>
    )
}
