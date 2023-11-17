import {useState} from "react";
import {Button, Form, Input, Modal} from "antd";
import styles from '../assets/css/Auth.modal.css';


export const AuthModal = ({open, setOpen}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleCancel = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {

        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    }


    return (
        <Modal
                title="Authorization"
                open={open}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[]}
            >
                <Form onFinish={handleSubmit} className={styles.modal__container}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password size="large" />
                    </Form.Item>

                    <Button key="submit" htmlType="submit" type="primary" loading={confirmLoading}>
                        Authorize
                    </Button>
                </Form>

            </Modal>
    )
}