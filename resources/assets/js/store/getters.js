const menuItems = state => state.menu.menus;
const sidebarOpened = state => state.app.sidebar.opened;
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation;
const config = state => state.app.config;
const palette = state => state.app.config.palette;
const isLoading = state => state.app.isLoading;
export {
    menuItems,
    sidebarOpened,
    toggleWithoutAnimation,
    config,
    palette,
    isLoading
};