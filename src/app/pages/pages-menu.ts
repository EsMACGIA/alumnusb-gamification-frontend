import { NbMenuItem } from '@nebular/theme';

export const MENU_ADMIN: NbMenuItem[] = [
  {
    title: 'Cargar CSV',
    icon: 'upload',
    link: '/pages/upload-csv',
  },
];

export const MENU_USUARIO: NbMenuItem[] = [
  {
    title: 'Perfil',
    icon: 'person-outline',
    link: '/pages/my_profile',
    home: true,
  },
  {
    title: 'Estadísticas',
    icon: 'pie-chart-outline',
    link: '/pages/my_stats',
  },
  {
    title: 'Logros',
    icon: 'award-outline',
    link: '/pages/my_achievements',
  },
];
