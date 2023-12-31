import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Recherche..." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        EN
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ChatIcon className="icon" />
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <ListIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src="../avatar.png" alt="Avatar" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar