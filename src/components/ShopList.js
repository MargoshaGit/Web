import styles from '../assets/css/shopList.module.css';
import {ShopItem} from "./ShopItem";
export const ShopList = ({shopList}) => {


    return (
        <div className={styles.shoplist__container}>
            {shopList.map((item, idx) => {
                return (
                    <ShopItem key={idx} item={item}/>
                )
            })}
        </div>
    )
}