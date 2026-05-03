import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { Room } from "./Room";
import { SidePanel } from "./SidePanel";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 p-4 gap-6 overflow-hidden">
        <div className="w-full flex-1 flex flex-col items-center overflow-auto rounded-xl">
          <Room />
          <Dashboard />
        </div>
        <SidePanel />
      </div>
    </div>
  );
};
