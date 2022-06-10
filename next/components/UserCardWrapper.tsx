import { useCallback, useState } from "react"
import UserCard from "./UserCard"

export default function UserCardWrapper(props: {
    attributes?: {
        userData: {
            name: string
            age: number
            text: string
        }
    }
}) {
    let attributes = props.attributes
    if (!attributes || Object.keys(attributes).length === 0) {
        attributes = {
            userData: {
                name: "boo hoo",
                age: 20,
                text: "booop"
            },
        }
    }

    const [modalOpen, setModalOpen] = useState(false)
    const toggleModal = useCallback(
        () => setModalOpen(prevState => !prevState),
        []
    )

    return (
        <div className="mt-block-user-card" data-mt-attributes={JSON.stringify(attributes)}>
            <UserCard attributes={attributes} toggleModal={toggleModal} modalOpen={modalOpen} />
        </div>
    )
}
