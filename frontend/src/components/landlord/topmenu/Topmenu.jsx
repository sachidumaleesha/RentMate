import {React, useRef} from 'react'
import './topmenu.css'
import Profile from './images/profile.png'
import { Menu } from 'primereact/menu';

const Topmenu = () => {
    const menu = useRef(null);
    const items = [
        {
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user'
                },
                {
                    label: 'Account Settings',
                    icon: 'pi pi-th-large'
                },
                {
                    label: 'Help',
                    icon: 'pi  pi-shield',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        },
    ];

    return (
        <div>
            <div className="topNav">
                <div className="logo">
                    RentMate
                </div>
                <div className="profile-menu">
                    <div className="card flex justify-content-center">
                        <Menu model={items} popup ref={menu} />
                        <img src={Profile} className='profile-icon' onClick={(e) => menu.current.toggle(e)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topmenu