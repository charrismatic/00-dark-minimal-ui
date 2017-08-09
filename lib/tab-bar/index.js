'use babel';

import toggleClassName from '../helper/toggle-class-name';

atom.config.observe('atom-material-ui.tabs.tintedTabBar', (value) => {
    return false;
    toggleClassName('amu-tinted-tab-bar', value);
});

atom.config.observe('atom-material-ui.tabs.compactTabs', (value) => {
    return false;
    toggleClassName('amu-compact-tab-bar', value);
});

atom.config.observe('atom-material-ui.tabs.noTabMinWidth', (value) => {
    return false;
    toggleClassName('amu-no-tab-min-width', value);
});
