import React from 'react'

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData2 =[
    {
        title: 'Home',
        path:'/home2',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',

    },

    {
        title: 'Budgets',
        path:'/budget',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },

    {
        title: 'Scholarship',
        path:'/scholar',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },

    {
        title: 'General Ledger',
        path:'/others',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },

    {
        title: 'Sponsered Projects',
        path:'/fund',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',

    },
    {
        title: 'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',

    },
    {
        title: 'Logout',
        path:'/',
        icon: <IoIcons.IoMdLogOut />,
        cName: 'nav-text',

    },


]