import {useState} from "react";
import {AuthModal} from "./AuthModal";
import {Dialog} from "./Dialog";

export const Header = () => {

    const [open, setOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MargoShop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setOpen(true)} href="#">Authorization</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>setShowMessage(true)} href="#">ShowDialogWindow</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Dialog showMessage={showMessage} setShowMessage={setShowMessage}/>
            <AuthModal open={open} setOpen={setOpen}/>
        </header>
    )
}