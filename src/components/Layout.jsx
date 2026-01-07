import { useState } from "react"
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from "../context/AuthContext"

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)

    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            {globalUser ? (
                <button onClick={logout}>
                    <p>Log Out</p>
                </button>
            ) : (
                <button onClick={() => { setShowModal(true) }}>
                    <p>Sign up free</p>
                    <i className="fa-solid fa-mug-hot"></i>
                </button>
            )}
        </header>
    )
    const footer = (
        <footer>
            <p>This <span className="text-gradient">Caffiend</span> version was made by <i className="fa-brands fa-github"></i><a href="https://github.com/RexThe23rd" target="_blank">RexThe23rd</a> following Smoljames' <a href="https://www.youtube.com/watch?v=iKpkVKubvKk" target="_blank">ReactJS course</a><br />using a modified <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a> design library.<br></br>
                <span className="font-bolder">Original made by <a href="https://www.smoljames.com">Smoljames.</a></span></p>
        </footer>
    )

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => { setShowModal(false) }}>
                    <Authentication handleCloseModal={() => { setShowModal(false) }} />
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}