import styles from '../assets/css/shopList.module.css';
export const ShopItem = ({item}) => {
    return (
        <div className="card">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text y="50%" x="50%" textAnchor="middle" fill="#dee2e6">{item?.name}</text>
            </svg>

            <div id={styles.card__body} className="card-body">
                <h5 className="card-title">{item?.name}</h5>
                <p className="card-text">{item?.description}</p>
                <div className={styles.card__btns}>
                    <a href="#" className="btn btn-primary">See more</a>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    </div>
                </div>

            </div>
        </div>
    )
}