import { Routes } from '@angular/router';
import { Tests } from './tests/tests';
import { MainPage } from './main-page/main-page';
import { Profile } from './profile/profile';
import { Tariff } from './tariff/tariff';
import { Achievements } from './achievements/achievements';

export const routes: Routes = [
    {
        path: '',
        component: MainPage,
        title: 'Main'
    },
    {
        path: 'tests',
        component: Tests,
        title: 'Tests',
    },
    {
        path: 'profile',
        component: Profile,
        title: 'Profile',
    },
    {
        path: 'tariff',
        component: Tariff,
        title: 'Tariff'
    },
    {
        path: 'achievements',
        component:Achievements,
        title: 'Achievements'
    }
];
