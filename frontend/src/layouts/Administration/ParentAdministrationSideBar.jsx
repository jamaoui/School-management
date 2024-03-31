import {cn} from "@/lib/utils"
import {Button} from "../../components/ui/button.jsx";
import {Link} from "react-router-dom";
import {ADMIN_MANAGE_PARENTS_ROUTE} from "../../router/index.jsx";

export function ParentAdministrationSideBar({className}) {

  return (
    <div className={cn("pb-12", className)}>
      <div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Administration
          </h2>
          <div className="space-y-1">

          </div>
        </div>
      </div>
    </div>
  )
}
