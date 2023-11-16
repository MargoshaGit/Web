import styles from './assets/css/App.module.css';
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {ShopList} from "./components/ShopList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ShopItemPage} from "./components/ShopItemPage";
function App() {

    const shopList = [
        {name: "Sony WH-1000XM4", price: 350, imgUrl: "https://picsum.photos/200/300", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Samsung QLED Q80A", price: 1200, imgUrl: "https://picsum.photos/250/350", description: "Pellentesque elit eget gravida cum sociis. At lectus urna duis convallis convallis tellus id."},
        {name: "Dyson V11", price: 600, imgUrl: "https://picsum.photos/230/330", description: "In arcu cursus euismod quis viverra. Convallis aenean et tortor at risus viverra adipiscing at in."},
        {name: "Instant Pot Duo Nova", price: 100, imgUrl: "https://picsum.photos/220/320", description: "Elementum sagittis vitae et leo duis. Mauris nunc congue nisi vitae. Tortor dignissim convallis aenean et tortor."},
        {name: "Fitbit Charge 5", price: 150, imgUrl: "https://picsum.photos/200/300", description: "Faucibus interdum posuere lorem ipsum dolor. Egestas pretium aenean pharetra magna ac placerat."},
        {name: "Nespresso VertuoPlus", price: 180, imgUrl: "https://picsum.photos/200/300", description: "Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo."},
        {name: "GoPro HERO10 Black", price: 500, imgUrl: "https://picsum.photos/200/300", description: "Vehicula ipsum a arcu cursus vitae. Aliquam sem et tortor consequat. In mollis nunc sed id."},
        {name: "Nintendo Switch", price: 300, imgUrl: "https://picsum.photos/200/300", description: "Morbi tincidunt augue interdum velit euismod. In nibh mauris cursus mattis. Volutpat odio facilisis mauris sit."},
        {name: "Bose QuietComfort Earbuds", price: 280, imgUrl: "https://picsum.photos/200/300", description: "Tortor pretium viverra suspendisse potenti. Adipiscing tristique risus nec feugiat in. Sed augue lacus viverra vitae."},
    ]

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<ShopList shopList={shopList} />} />
                <Route path={'/shopItemPage'} element={<ShopItemPage />}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
