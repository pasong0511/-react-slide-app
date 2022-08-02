import img0 from "./images/img00.png";
import img1 from "./images/img01.png";
import img2 from "./images/img02.png";
import img3 from "./images/img03.png";
import img4 from "./images/img04.png";
import img5 from "./images/img05.png";

import PullSlider from "./components/PullSlider/SliderMain";

function App() {
    const data = [img0, img1, img2, img3, img4, img5];

    return (
        <div className="App">
            <PullSlider data={data} />
        </div>
    );
}

export default App;
