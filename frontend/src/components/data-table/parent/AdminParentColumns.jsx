import {Button} from "../../ui/button.jsx";
import {ArrowUp,ArrowDown} from "lucide-react";

export const AdminParentColumns = [
  {
    accessorKey: "id",
    header: "#ID",
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => {
      const isAsc = column.getIsSorted() === "asc"
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(isAsc)}
        >
          Firstname
          {isAsc?<ArrowUp className="ml-2 h-4 w-4" />:<ArrowDown className="ml-2 h-4 w-4" />}
        </Button>
      )
    },
  },
  {
    accessorKey: "lastname",
    header: "Lastname",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of birth",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({row}) => {
      const value = row.getValue("gender")
      const gender = value === 'm' ? 'Male' : 'Female'
      return <>{gender}</>
    },
  },
  {
    accessorKey: "blood_type",
    header: "Blood Type",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({row}) => {
      const phone = row.getValue("phone")
      return <div className="text-right font-medium">+212-{phone}</div>
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "updated_at",
    header: "Updated at",
    cell: ({ row }) => {
      const date = (row.getValue("updated_at"))
      const formatted = new Date(date).toString()

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
