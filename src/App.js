import { useSelector } from "react-redux";

import Items from "./components/Items/Items";
import Comments from "./components/Comments/Comments.jsx";

function App() {
    const selectedItem = useSelector((state) => state.items.selectedId);
    return(
        <div className='app'>
            <Items/>
            {selectedItem && (<Comments/>)}
        </div>
    ) 
}

export default App;