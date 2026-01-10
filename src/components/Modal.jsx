import { useEffect, useState } from 'react'
import ReactDom from 'react-dom'

export default function Modal(props) {
    const { children, handleCloseModal } = props

    const [open, setOpen] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => setOpen(true))
    }, [])

    function closeWithAnimation() {
        setOpen(false)
        setTimeout(handleCloseModal, 200) // match CSS duration
    }

    return ReactDom.createPortal(
        <div className={`modal-container ${open ? "open" : ""}`}>
            <button onClick={closeWithAnimation} className='modal-underlay' />
            <div className="modal-content">
                {children &&
                    typeof children === "object" &&
                    "type" in children
                    ? (
                        <children.type
                            {...children.props}
                            handleCloseModal={closeWithAnimation}
                        />
                    )
                    : children}
            </div>
        </div>,
        document.getElementById("portal")
    )
}