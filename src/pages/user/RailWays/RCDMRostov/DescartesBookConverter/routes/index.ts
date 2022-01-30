import { FC } from 'react';

import Home from '../frames/Home';
import Upload from '../frames/Upload';
import DownloadReports from '../frames/DowloadReports';
import DownloadFileTemplate from '../frames/DowloadFileTemplate';

import { TRole } from 'src/state/redux/features/user/actionCreators';

export interface IRoute {
  path: string;
  component: FC;
  exact: boolean;
  linkText: string;
  availableRole: TRole; // этот роут будет доступен определенной роли
}

export const tagsRoutes: IRoute[] = [
  {
    path: '/descartesbookconverter',
    component: Home,
    exact: true,
    linkText: 'Помощь',
    availableRole: 'user',
  },
  {
    path: '/descartesbookconverter/upload',
    component: Upload,
    exact: true,
    linkText: 'Загрузить файл-шаблон',
    availableRole: 'user',
  },
  {
    path: '/descartesbookconverter/downloadreports',
    component: DownloadReports,
    exact: true,
    linkText: 'Скачать отчеты',
    availableRole: 'user',
  },
  {
    path: '/descartesbookconverter/downloadfiletempate',
    component: DownloadFileTemplate,
    exact: true,
    linkText: 'Скачать файл-шаблон',
    availableRole: 'user',
  },
];
