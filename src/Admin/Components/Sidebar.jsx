import { FaGift, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { ImStatsDots } from 'react-icons/im';
import { MdCancel, MdOutlineSupportAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = ({ selectedItem, setSelectedItem, closeSidebar }) => {
  const menuItems = [
    { name: 'Statistics', icon: <ImStatsDots />, to: '#' },
    { name: 'Products', icon: <HiOutlineShoppingBag />, to: '#' },
    { name: 'Users', icon: <FaUsers />, to: '#' },
    { name: 'Support', icon: <MdOutlineSupportAgent />, to: '#' },
    { name: 'Coupon', icon: <FaGift />, to: '#' },
  ];

  return (
    <div className="min-h-screen w-64 bg-white p-4 shadow-lg flex flex-col justify-between relative">
      {/* Close Button for Small Devices */}
      <button 
        className="absolute top-4 right-4 lg:hidden text-mainColor " 
        onClick={closeSidebar}
      >
        <MdCancel size={24} />
      </button>
      
      <div>
        <div className="text-3xl text-mainColor font-semibold mb-8">Bella</div>
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => {
                setSelectedItem(item.name);
                closeSidebar();
              }}
              className={`flex items-center font-montserrat p-2 rounded-lg ${
                selectedItem === item.name
                  ? 'text-white bg-mainColor'
                  : 'text-gray-700 hover:text-mainColor'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-8 flex items-center font-montserrat text-gray-700 hover:text-red-600 cursor-pointer">
        <FaSignOutAlt />
        <span className="ml-2">Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;