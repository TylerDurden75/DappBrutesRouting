import React from 'react';
import {FiChevronDown} from 'react-icons/fi';
import {FiChevronUp} from 'react-icons/fi'

export const SidebarData = [
    {
        title: 'Brutes',
        path: '/brutes',
        iconClosed: <FiChevronDown/>,
        iconOpened: <FiChevronUp/>,
        subNav: [
            {
                title: 'Brute Factory',
                path:'/brutes/brutefactory',
            },
            {
                title: 'Brute Mall',
                path:'/brutes/brutemall',
            },
            {
                title: 'Brute Hotel',
                path:'/brutes/brutehotel',
            },
        ]
    },
    {
        title: 'Gears',
        path: '/gears',
        iconClosed: <FiChevronDown/>,
        iconOpened: <FiChevronUp/>,
        subNav: [
            {
                title: 'Equipment Shop',
                path:'/gears/equipmentshop',
            },
            {
                title: 'Forge',
                path:'/gears/forge',
            },
            {
                title: 'Junkyard',
                path:'/gears/junkyard',
            },
        ]
    },
    {
        title: 'Marketplace',
        path: '/marketplace',
        iconClosed: <FiChevronDown/>,
        iconOpened: <FiChevronUp/>,
        subNav: [
            {
                title: 'Gears Market',
                path:'/marketplace/gearsmarket',
            },
            {
                title: 'Brutes Market',
                path:'/marketplace/brutesmarket',
            },
        ]
    },
    {
        title: 'Account',
        path: '/account',
        iconClosed: <FiChevronDown/>,
        iconOpened: <FiChevronUp/>,
        subNav: [
            {
                title: 'Dashboard',
                path:'/account/dashboard',
            },
            {
                title: 'Inventary',
                path:'/account/inventary',
            },
            {
                title: 'Succes',
                path:'/account/success',
            },
            {
                title: 'History',
                path:'/account/history',
            },
            {
                title: 'Parameters',
                path:'/account/parameters',
            },
        ]
    }
]