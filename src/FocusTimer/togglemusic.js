import * as sounds from "./sounds.js";
import state from "./state.js";

// Função para pausar todos os sons
function pauseAllSounds() {
    sounds.tree.pause();
    sounds.rain.pause();
    sounds.market.pause();
    sounds.fire.pause();
}

// Função para remover todas as classes de cor
function removeAllColorClasses() {
    const elements = document.querySelectorAll(
        ".ph-tree, .ph-cloud-rain, .ph-storefront, .ph-campfire"
    );
    elements.forEach((element) => {
        element.classList.remove("tree", "rain", "market", "fire");
    });
}

export function toggleMusicTree() {
    pauseAllSounds(); // Pausa todos os sons
    removeAllColorClasses(); // Remove todas as classes de cor

    state.IsMute = document.documentElement.classList.toggle("music-on");

    const treeButton = document.querySelector(".ph-tree");

    if (state.IsMute) {
        sounds.tree.play();
        treeButton.classList.add("tree");
        return;
    }
}

export function toggleMusicRain() {
    pauseAllSounds(); // Pausa todos os sons
    removeAllColorClasses(); // Remove todas as classes de cor

    state.IsMute = document.documentElement.classList.toggle("music-on");

    const rainButton = document.querySelector(".ph-cloud-rain");

    if (state.IsMute) {
        sounds.rain.play();
        rainButton.classList.add("rain");
        return;
    }
}

export function toggleMusicMarket() {
    pauseAllSounds(); // Pausa todos os sons
    removeAllColorClasses(); // Remove todas as classes de cor

    state.IsMute = document.documentElement.classList.toggle("music-on");

    const marketButton = document.querySelector(".ph-storefront");

    if (state.IsMute) {
        sounds.market.play();
        marketButton.classList.add("market");
        return;
    }
}

export function toggleMusicFire() {
    pauseAllSounds(); // Pausa todos os sons
    removeAllColorClasses(); // Remove todas as classes de cor

    state.IsMute = document.documentElement.classList.toggle("music-on");

    const fireButton = document.querySelector(".ph-campfire");

    if (state.IsMute) {
        sounds.fire.play();
        fireButton.classList.add("fire");
        return;
    }
}
