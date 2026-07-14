import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div>
            <aside>
                <h2>InkFlow Admin</h2>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin">
                                Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/admin/artists">
                                Artists
                            </NavLink>
                        </li>

                        {/*
                        <li>
                            <NavLink to="/admin/services">
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/admin/portfolio">
                                Portfolio
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/admin/bookings">
                                Bookings
                            </NavLink>
                        </li>
                        */}
                    </ul>
                </nav>
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
