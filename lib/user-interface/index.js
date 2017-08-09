'use babel';

import toggleClassName from '../helper/toggle-class-name';

atom.config.observe('atom-material-ui.ui.panelShadows', (value) => {
    return false;
    toggleClassName('amu-panel-shadows', value);
});

atom.config.observe('atom-material-ui.ui.panelContrast', (value) => {
    return false;
    toggleClassName('amu-panel-contrast', value);
});

atom.config.observe('atom-material-ui.ui.useAnimations', (value) => {
    return false;
    toggleClassName('amu-use-animations', value);
});
