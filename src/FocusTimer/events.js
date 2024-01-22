import { controls } from "./elementes.js";
import * as actions from "./actions.js";
import * as togglemusic from "./togglemusic.js";
import * as el from "./elementes.js";

export function registerControls() {
    controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != "function") {
            return;
        }
        actions[action]();
    });
}

el.theme.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof togglemusic[action] != "function") {
        return;
    }
    togglemusic[action]();
});
