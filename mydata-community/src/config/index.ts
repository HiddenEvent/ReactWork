// icons
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/BarChartOutlined';
import CodeIcon from '@material-ui/icons/CodeOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import PrivateIcon from '@material-ui/icons/LockOutlined';
import PublicIcon from '@material-ui/icons/LockOpenOutlined';

// components
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import GHPrivate from '../pages/GitHub/PrivateRepo';
import GHPublic from '../pages/GitHub/PublicRepo';
import CodeEditor from '../pages/CodeEditor';
import Settings from '../pages/Settings';

// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
  {
    key: 'router-home',
    title: '홈',
    tooltip: '스윗홈',
    path: '/',
    enabled: true,
    component: Home,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: 'router-dashboard',
    title: '기출문제',
    tooltip: '기출문제',
    path: '/dashboard',
    enabled: true,
    component: Dashboard,
    icon: DashboardIcon,
  },
  {
    key: 'router-gh',
    title: '함께해요',
    tooltip: '나와함께',
    enabled: true,
    icon: GitHubIcon,
    subRoutes: [
      {
        key: 'router-gh-private',
        title: '비공개 자료',
        tooltip: '비공개 자료',
        path: '/gh/private',
        enabled: true,
        component: GHPrivate,
        icon: PrivateIcon,
      },
      {
        key: 'router-gh-public',
        title: '공개 자료',
        tooltip: '공개 자료',
        path: '/gh/public',
        enabled: false,
        component: GHPublic,
        icon: PublicIcon,
      },
    ],
  },
  {
    key: 'router-code',
    title: '마이데이터 공부방',
    tooltip: '마이데이터 용어집',
    path: '/code-editor',
    enabled: true,
    component: CodeEditor,
    icon: CodeIcon,
    appendDivider: true,
  },
  {
    key: 'router-settings',
    title: 'Settings',
    tooltip: 'Settings',
    path: '/settings',
    enabled: true,
    component: Settings,
    icon: SettingsIcon,
  },
];
