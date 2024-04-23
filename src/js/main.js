import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import App from "../App";
import {render} from "../../runtime/jsx-runtime";


const rootElement = document.getElementById("root");
render(<App />, rootElement);
