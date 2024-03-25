import {cn} from "@/lib/utils"
import {Button} from "../../components/ui/button.jsx";
import {Link} from "react-router-dom";
import {ADMIN_MANAGE_PARENTS_ROUTE} from "../../router/index.jsx";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Parents
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
