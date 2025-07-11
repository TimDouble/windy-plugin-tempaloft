windyPlugin('tempaloft', {
    // Called when plugin is loaded
    init: (plugin) => {
        const { store } = windyAPI;

        // Get HTML panel
        const root = document.getElementById('tempaloft-plugin');
        plugin.onopen = () => {
            store.activate('temp');
        };

        // Change temperature altitude
        root.querySelector('#altitudeSelector').addEventListener('change', (e) => {
            const level = e.target.value;
            store.set('overlay', level); // Set the selected level
        });

        // Optional: react to map movement or overlay change
    },

    // Called when plugin is opened
    onopen: () => {
        console.log('Temperature Aloft plugin opened');
    },

    // Called when plugin is closed
    onclose: () => {
        console.log('Temperature Aloft plugin closed');
    }
});
