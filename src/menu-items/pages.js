// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    // title: 'Reservation Information',
    type: 'group',
    children: [
        {
            id: 'myReservation',
            title: 'My Reservation ',
            type: 'item',
            url: '/reservations',
            icon: icons.ProfileOutlined
            // target: true
        }
    ]
};

export default pages;
