import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaGem } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import sidebarBg from '../../assets/bg2.jpg';
import './SideBar.scss';
import { Link } from 'react-router-dom'
const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;
    return (
        <div>
            <ProSidebar
                //   image={image ? sidebarBg : false}
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={"00bfff"} />
                        Nguyễn Trường Nam
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        {/* <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            Nguyễn Trường Nam
                        </MenuItem> */}
                        {/* <MenuItem
                            icon={<MdDashboard />}
                        >
                            Dashboard
                            <Link to="/admins" />
                        </MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaGem />}
                            title="Quản lý người dùng"
                        >
                            <MenuItem>Quản lý Users<Link to="/admins/manage-users" /></MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            {/* <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span> */}
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}
export default SideBar;