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
import UserApi from "../../services/Api/Student/UserApi.js";
import {LOGIN_ROUTE} from "../../router/index.jsx";
import {useUserContext} from "../../context/StudentContext.jsx";
import {useNavigate} from "react-router-dom";
import DefaultDropDownMenu from "./DefaultDropDownMenu.jsx";

export default function TeacherDropDownMenu() {
  return <>
    <DefaultDropDownMenu>
    </DefaultDropDownMenu>
  </>
}
