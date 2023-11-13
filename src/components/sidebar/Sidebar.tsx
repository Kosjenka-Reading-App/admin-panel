import { FiLogOut, FiFileText } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { Link } from "react-router-dom"; // Import the Link component
import SidebarLink from "./SidebarLink";
import { BsBoxFill } from "react-icons/bs";
import logOut from "../../services/logout";

const Sidebar = ({ activeRoute }: { activeRoute: string }) => {
  return (
    <div className="w-16 h-screen flex flex-col justify-between py-4 bg-navbar-color">
      <div>
        <div className="flex justify-center mt-4 mb-8">
          <div className="bg-custom-light-blue rounded-lg w-12 h-12 flex items-center justify-center">
            <span className="text-custom-blue text-3xl font-bold">K</span>
          </div>
        </div>

        <SidebarLink
          active={activeRoute === "admins"}
          to="/admins"
          icon={LuUsers}
        />

        <SidebarLink
          active={activeRoute === "exercises"}
          to="/exercises"
          icon={FiFileText}
        />

        <SidebarLink
          active={activeRoute === "categories"}
          to="/categories"
          icon={BsBoxFill}
        />
      </div>

      <div className="flex justify-center pb-4">
        <Link
          to="/login"
          className="bg-custom-dark-blue p-0 rounded-lg flex items-center justify-center w-12 h-12 hover:bg-custom-hover-blue transition"
          title="Logout"
          onClick={logOut}
        >
          <FiLogOut size={30} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
