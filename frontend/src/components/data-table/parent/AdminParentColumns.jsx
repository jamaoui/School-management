import {Button} from "../../ui/button.jsx";
import {ArrowUp,ArrowDown} from "lucide-react";
import {DataTableColumnHeader} from "../DataTableColumnHeader.jsx";

export const AdminParentColumns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="#ID" />
    },
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Firstname" />
    },
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Lastname" />
    },
  },
  {
    accessorKey: "date_of_birth",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Date of birth" />
    },
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Gender" />
    },
    cell: ({row}) => {
      const value = row.getValue("gender")
      const gender = value === 'm' ? 'Male' : 'Female'
      return <>{gender}</>
    },
  },
  {
    accessorKey: "blood_type",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Blood Type" />
    },
  },
  {
    accessorKey: "address",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Address" />
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Phone" />
    },
    cell: ({row}) => {
      const phone = row.getValue("phone")
      return <div className="text-right font-medium">+212-{phone}</div>
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Email" />
    },
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Updated at" />
    },
    cell: ({ row }) => {
      const date = (row.getValue("updated_at"))
      const formatted = new Date(date).toString()

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
