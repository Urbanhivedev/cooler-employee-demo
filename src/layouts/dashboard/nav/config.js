// component
import SvgColor from '../../../components/svg-color';
import {GiCooler} from 'react-icons/gi'


const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'cooler',
    path: '#',
    icon: /*icon('ic_disabled')*/<GiCooler style={{color:"white "}}/>,
    children: [
      {
        title: 'my coolers',
        type: 'item',
        icon: 'Savings',
        path: '/dashboard/my-cooler',
      },
      // {
      //   title: 'public',
      //   type: 'item',
      //   icon: 'LockOpen',
      //   path: '/dashboard/public-cooler',
      // },
      {
        title: 'join cooler',
        type: 'item',
        icon: 'LockIcon',
        path: '/dashboard/cooler',
      },
    ],
  },
  {
    title: 'messages',
    path: '/dashboard/chat',
    // icon: icon('ic_msg'),
    iconLabel: 'msg',
  },
  {
    title: 'settings',
    path: '/dashboard/settings',
    iconLabel: 'settings',
  },
];

export default navConfig;
