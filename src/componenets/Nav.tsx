import { useAuth } from "payload/components/utilities";
import React from "react";

const CustomAvatar: React.FC = ({ children }: any) => {
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);
  const timeout = React.useRef<any>(null);

  return (
    <div
      className="relative"
      onClick={(e) => {
        e.preventDefault();
      }}
      onMouseEnter={(e) => {
        setOpen(true);

        if (timeout.current) {
          clearTimeout(timeout.current);
          timeout.current = null;
        }
      }}
      onMouseLeave={(e) => {
        timeout.current = setTimeout(() => {
          setOpen(false);
        }, 500);
      }}
    >
      <div>avatar</div>
      <div className={`absolute -right-5 z-10 top-10 ${open ? "" : "hidden"}`}>
        <ul className="bg-black p-5 list-none rounded-md border-[1px] border-gray-700 border-solid ">
          <li>{user.email}</li>
          <li>
            <a
              href="/admin/account"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Profile
            </a>
          </li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomAvatar;
