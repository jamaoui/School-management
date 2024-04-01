import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "../../components/ui/dropdown-menu.jsx";
import {Button} from "../../components/ui/button.jsx";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react'
import UserApi from "../../services/Api/UserApi.js";
import {LOGIN_ROUTE} from "../../router/index.jsx";
import {useUserContext} from "../../context/StudentContext.jsx";
import {useNavigate} from "react-router-dom";

export default function DefaultDropDownMenu({children}) {
  const navigate = useNavigate()
  const {logout: contextLogout, user} = useUserContext()

  const logout = async () => {
    UserApi.logout().then(() => {
      contextLogout()
      navigate(LOGIN_ROUTE)
    })
  }
  return <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button> <User className="mr-2 h-4 w-4"/>{user.firstname}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
          {children}
        </DropdownMenuGroup>
        <DropdownMenuSeparator/>
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4"/>
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
}
