import {cn} from "@/lib/utils"

export function TeacherAdministrationSideBar({className}) {

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
