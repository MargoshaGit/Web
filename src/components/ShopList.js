import styles from '../assets/css/shopList.module.css';
import {ShopItem} from "./ShopItem";
import {Header} from "./Header";
import {useContext} from "react";
import {ShopListContext} from "../App";
export const ShopList = () => {

    const {shopList} = useContext(ShopListContext);

    return (
        <>
            <Header />
            <div className={styles.shoplist__container}>
                {shopList?.map((item, idx) => {
                    return (
                        <ShopItem key={idx} index={idx} item={item}/>
                    )
                })}
            </div>
        </>

    )
}