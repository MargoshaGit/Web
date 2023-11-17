
import {useRef, useState} from "react";
import '../assets/css/dialog.css';
import {CSSTransition} from "react-transition-group";
import {Button, Form, Input, Modal} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";

export const Dialog = ({showMessage, setShowMessage}) => {

    const nodeRef = useRef(null);
    return (
        <>
            <CSSTransition
                nodeRef={nodeRef}
                in={showMessage}
                timeout={500}
                classNames="alert"
            >
                <Modal
                    ref={nodeRef}
                    title="Dialog window"
                    open={showMessage}
                    onOk={() => setShowMessage(false)}
                    onCancel={()=>setShowMessage(false)}
                >
                    <p>Click the button under me!</p>
                </Modal>
            </CSSTransition>


        </>


    )
}