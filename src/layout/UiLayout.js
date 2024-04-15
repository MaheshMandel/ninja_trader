import React from 'react';

import { Gauge, ChevronsLeft } from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { mainRoutes } from '../utils/setting';

function RightSection({ className = '' }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed((e) => !e);
  };

  return (
    <section
      className={`w-[250px] max-w-[250px] border-r-4 border-uiBackground-light_secondary/40 transition-all ease-in-out duration-200 flex flex-col ${
        collapsed && 'w-[70px]'
      } ${className && className}`}
    >
      <div className='flex flex-row items-center h-[10vh] border-b-2 border-uiBackground-light_secondary/40 px-3'>
        {/* Ui Logo */}
        <div className={`${collapsed && 'hidden'}`}>LOGO</div>
        {/* closable icon */}
        {/* <div
          className='cursor-pointer ml-auto border-2 rounded-sm'
          onClick={toggleCollapsed}
        >
          <ChevronsLeft size={30} className={`${collapsed && 'rotate-180'}`} />
        </div> */}
      </div>

      {/* side menu content */}
      <div className={``}>
        {mainRoutes.map((item) => {
          if (item.showOnDashboard)
            return (
              <div
                onClick={() => navigate(item.path)}
                key={item.path}
                className={`cursor-pointer py-4 flex flex-row items-center ${
                  collapsed && 'justify-center'
                } hover:bg-uiBackground-light_secondary/5 transition-all ease-in-out duration-200 px-3 hover:text-uiBackground-light_secondary`}
              >
                <div className={`${collapsed ? 'mr-0' : 'mr-2'}`}>
                  {item.icon}
                </div>
                <p
                  className={`transition-opacity ${
                    collapsed ? 'opacity-0 hidden' : 'opacity-100'
                  }`}
                >
                  {item.title}
                </p>
              </div>
            );
        })}
      </div>

      {/* <p className='mt-auto mb-2 text-center'>2024-04-10</p> */}
    </section>
  );
}

function HeaderSection() {
  return (
    <section className=' h-[10vh] px-4 flex flex-row items-center border-b-2 border-uiBackground-light_secondary/40'>
      Header
    </section>
  );
}

function UiLayout() {
  return (
    <section className='h-screen flex flex-row bg-uiBackground-light_primary'>
      {/* side menu */}
      <RightSection />

      {/* Content */}
      <section className='w-full h-full flex flex-col'>
        {/* Header Section */}
        <HeaderSection />

        {/* Content Section */}
        <div className='bg-uiBackground-light_primary flex-1'>
          <Outlet />
        </div>
      </section>
    </section>
  );
}

export default UiLayout;
