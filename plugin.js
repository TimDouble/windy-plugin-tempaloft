export const name = 'tempaloft';

export function setup(params) {
    const { store } = windyAPI;

    const levels = ['FL050', 'FL100', 'FL180', 'FL240', 'FL300', 'FL340'];

    let currentLevelIndex = 0;

    function updateOverlay() {
        const level = levels[currentLevelIndex];
        store.set('overlay', 'temp');
        store.set('level', level);
    }

    window.tempaloft = {
        nextLevel: () => {
            currentLevelIndex = (currentLevelIndex + 1) % levels.length;
            updateOverlay();
        },
        currentLevel: () => levels[currentLevelIndex]
    };

    updateOverlay();
}
