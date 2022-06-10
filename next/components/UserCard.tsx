export default function UserCard(props: {
    attributes: {
        userData: {
            name: string,
            age: number,
            text: string
        },
    },
    toggleModal: () => void,
    modalOpen: boolean
}) {
    const attributes = props.attributes
    const toggleModal = props.toggleModal
    const modalOpen = props.modalOpen


    return (
        <div className="js-mt-user-card c-mt-user-card">
            {props.attributes && (
                <>
                    <div>
                        <h4>{attributes.userData.name} {attributes.userData.age}</h4>
                        <button onClick={toggleModal}>Read More</button>
                    </div>
                    <div style={modalOpen ? { display: "none" } : undefined}>
                        <div>
                            <h4>Name: {attributes.userData.name}</h4>
                            <p>Age: {attributes.userData.age}</p>
                            <p><i>{attributes.userData.text}</i></p>
                            <button onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}