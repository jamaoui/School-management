import {DataTable} from "./DataTable.jsx";
import {useEffect, useState} from "react";
import ParentApi from "../../services/Api/ParentApi.js";
import {DataTableColumnHeader} from "./DataTableColumnHeader.jsx";
import {Button} from "@/components/ui/button"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../ui/alert-dialog.jsx";
import {toast} from "sonner";
import {Trash2Icon} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet.jsx";
import ParentUpsertForm from "../Forms/ParentUpsertForm.jsx";
import parentApi from "../../services/Api/ParentApi.js";

export default function AdminParentList() {
  const [data, setData] = useState([])

  const AdminParentColumns = [
    {
      accessorKey: "id",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="#ID"/>
      },
    },
    {
      accessorKey: "firstname",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Firstname"/>
      },
    },
    {
      accessorKey: "lastname",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Lastname"/>
      },
    },
    {
      accessorKey: "date_of_birth",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Date of birth"/>
      },
    },
    {
      accessorKey: "gender",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Gender"/>
      },
      cell: ({row}) => {
        const value = row.getValue("gender")
        const gender = value === 'm' ? 'Male' : 'Female'
        return <>{gender}</>
      },
    },
    {
      accessorKey: "blood_type",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Blood Type"/>
      },
    },
    {
      accessorKey: "address",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Address"/>
      },
    },
    {
      accessorKey: "phone",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Phone"/>
      },
      cell: ({row}) => {
        const phone = row.getValue("phone")
        return <div className="text-right font-medium">+212-{phone}</div>
      },
    },
    {
      accessorKey: "email",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Email"/>
      },
    },
    {
      accessorKey: "updated_at",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Updated at"/>
      },
      cell: ({row}) => {
        const date = (row.getValue("updated_at"))
        const formatted = new Date(date).toString()

        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      cell: ({row}) => {
        const {id, firstname, lastname} = row.original
        const [openUpdateDialog, setOpenUpdateDialog] = useState(false)
        return (<div className={'flex gap-x-1'}>
            <Sheet open={openUpdateDialog} onOpenChange={setOpenUpdateDialog}>
              <SheetTrigger>
                <Button size={'sm'}>Update</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Update parent {firstname} {lastname}</SheetTitle>
                  <SheetDescription>
                    Make changes to your parent here. Click save when you're done.
                    <ParentUpsertForm values={row.original} handleSubmit={(values) => {
                      const promise = parentApi.update(id, values)
                      promise.then(() => setOpenUpdateDialog(false));

                      return promise
                    }}/>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size={'sm'} variant={'destructive'}>Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure to delete
                    <span className={'font-bold'}> {firstname} {lastname}</span> ?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={async () => {
                    const deletingLoader = toast.loading('Deleting in progress.')
                    const {data: deletedParent, status} = await ParentApi.delete(id)
                    toast.dismiss(deletingLoader)
                    if (status === 200) {
                      setData(data.filter((parent) => parent.id !== id))
                      toast.success('Parent deleted', {
                        description: `Parent deleted successfully ${deletedParent.data.firstname} ${deletedParent.data.lastname}`,
                        icon: <Trash2Icon/>
                      })
                    }
                  }}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )
      },
    },
  ]
  useEffect(() => {
    ParentApi.all().then(({data}) => setData(data.data))
  }, []);
  return <>
    <DataTable columns={AdminParentColumns} data={data}/>
  </>
}
