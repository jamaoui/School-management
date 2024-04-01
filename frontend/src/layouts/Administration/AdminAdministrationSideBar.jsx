import {cn} from "@/lib/utils"
import {Button} from "../../components/ui/button.jsx";
import {Link} from "react-router-dom";
import {ADMIN_MANAGE_PARENTS_ROUTE, ADMIN_MANAGE_STUDENTS_ROUTE} from "../../router/index.jsx";
import {GraduationCapIcon, UserIcon} from "lucide-react";

export function AdminAdministrationSideBar({className}) {

  return (
    <div className={cn("pb-12", className)}>
      <div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Administration
          </h2>
          <div className="space-y-1">
            <Link to={ADMIN_MANAGE_PARENTS_ROUTE}>
              <Button variant="ghost" className="w-full justify-start">
                <UserIcon className="mr-2"/>
                Parents
              </Button>
            </Link>
            <Link to={ADMIN_MANAGE_STUDENTS_ROUTE}>
              <Button variant="ghost" className="w-full justify-start">
                <GraduationCapIcon className="mr-2"/>
                Students
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
