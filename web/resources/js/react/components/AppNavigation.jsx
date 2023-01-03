import React from "react";
import { AppLink, NavigationMenu } from '@shopify/app-bridge/actions';
import { useAppBridge } from '@shopify/app-bridge-react';
import { useLocation } from 'react-router-dom';

function AppNavigation() {
    const app = useAppBridge();

    const location = useLocation();

    const home = AppLink.create(app, {
        label: 'Home',
        destination: '/',
    });

    const settings = AppLink.create(app, {
        label: 'Settings',
        destination: '/settings',
    });

    const navigationMenu = NavigationMenu.create(app, {
        items: [home, settings],
    });

    switch (location.pathname) {
        case "/":
            navigationMenu.set({ active: home });
            break;
        case "/settings":
            navigationMenu.set({ active: settings });
            break;
        default:
            navigationMenu.set({ active: undefined });
    }

    return null
}

export default AppNavigation;
