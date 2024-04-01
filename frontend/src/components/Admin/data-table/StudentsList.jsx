import {DataTable} from "./DataTable.jsx";
import {useEffect, useState} from "react";
import {DataTableColumnHeader} from "./DataTableColumnHeader.jsx";
import StudentApi from "../../../services/Api/Admin/StudentApi.js";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../ui/alert-dialog.jsx";
import {Button} from "../../ui/button.jsx";
import {toast} from "sonner";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "../../ui/sheet.jsx";
import {Trash2Icon} from "lucide-react";
import studentApi from "../../../services/Api/Admin/StudentApi.js";
import StudentUpsertForm from "../Forms/StudentUpsertForm.jsx";

export default function StudentsList() {
  const [data, setData] = useState([])

  const studentColumns = [
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
      accessorKey: "email",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Email"/>
      },
    },
    {
      accessorKey: "formatted_updated_at",
      header: ({column}) => {
        return <DataTableColumnHeader column={column} title="Updated at"/>
      },
      cell: ({row}) => {
        const date = (row.getValue("formatted_updated_at"))

        return <div className="text-right font-medium">{date}</div>
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
                  <SheetTitle>Update student {firstname} {lastname}</SheetTitle>
                  <SheetDescription>
                    Make changes to your student here. Click save when you're done.
                    <StudentUpsertForm values={row.original} handleSubmit={(values) => {
                      const promise = studentApi.update(id, values)
                      promise.then((response) => {
                        const {student} = response.data
                        const elements = data.map((item) => {
                          if(item.id === id) {
                            return student
                          }
                          return item
                        })
                        setData(elements)
                        setOpenUpdateDialog(false);
                      });

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
                    const {data: deletedStudent, status} = await studentApi.delete(id)
                    toast.dismiss(deletingLoader)
                    if (status === 200) {
                      setData(data.filter((student) => student.id !== id))
                      toast.success('Student deleted', {
                        description: `Student deleted successfully ${deletedStudent.data.firstname} ${deletedStudent.data.lastname}`,
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
    StudentApi.all().then(({data}) => setData(data.data))
  }, []);
  return <>
    <DataTable columns={studentColumns} data={data}/>
  </>
}
