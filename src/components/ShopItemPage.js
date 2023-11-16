import styles from '../assets/css/shopItemPage.module.css';
import {Header} from "./Header";
import {useState} from "react";
import {useUpdateArray} from "../hooks/updateArrayHook/useUpdateArray";
import {useLogger} from "../hooks/loggerHook/useLogger";


export const ShopItemPage = () => {

    const { newArray, setNewArrayValue } = useUpdateArray([]);
    const { setLoggerValue } = useLogger();

    const handleSubmit = (event) => {
        event.preventDefault()

        const comment = {
            username: event.target.username.value,
            comment: event.target.comment.value
        }

        setLoggerValue(comment);
        setNewArrayValue(comment);
    }

    return (
        <>
            <Header />
            <div className={styles.page__body}>
                <div className={styles.item__name}>Item Name</div>
                <div className={styles.item__image}>
                    <img src="https://picsum.photos/800/400" alt="Item image"/>
                </div>
                <div className={styles.item__description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis convallis convallis tellus id. Eu feugiat pretium nibh ipsum consequat nisl vel. Bibendum at varius vel pharetra vel turpis nunc eget. Fusce id velit ut tortor. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Tempus imperdiet nulla malesuada pellentesque. Cras sed felis eget velit aliquet sagittis. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Tortor dignissim convallis aenean et. Imperdiet sed euismod nisi porta. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Nec ultrices dui sapien eget mi proin.</p>
                    <p>Gravida arcu ac tortor dignissim convallis aenean. Pharetra et ultrices neque ornare aenean. Luctus accumsan tortor posuere ac ut consequat semper. Dignissim diam quis enim lobortis scelerisque fermentum dui. Maecenas accumsan lacus vel facilisis. Odio ut sem nulla pharetra diam sit amet. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Faucibus turpis in eu mi. Mattis ullamcorper velit sed ullamcorper. Proin sed libero enim sed faucibus turpis. Quisque non tellus orci ac auctor augue mauris augue neque.</p>
                </div>

                <hr/>

                <div className={styles.comment__form}>
                    <h3>Comment Form</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name={'username'} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label">Comment</label>
                            <textarea name={'comment'} className="form-control" id="comment" rows="8"></textarea>
                        </div>
                        <div className="col-auto">
                            <button style={{width: '100%'}} type="submit" className="btn btn-primary mb-3">Send comment</button>
                        </div>
                    </form>
                </div>

                <div className={styles.commentList}>
                    <h2>Comments List</h2>
                    {newArray?.map((comm, idx) => {
                        return (
                            <div key={idx} className={styles.comm__body}>
                                <div style={{fontWeight:'bold'}}>{comm?.username}</div>
                                <div>{comm?.comment}</div>
                            </div>
                        )
                    })}
                </div>


            </div>
        </>
    )
}