// src/layouts/UserLayout.jsx
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <UserHeader />
      <main className="flex-1 bg-gray-50">{children}</main>
      <UserFooter />   {/*  ← footer is here  */}
    </div>
  );
}