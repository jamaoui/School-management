import {useUserContext} from "../../context/StudentContext.jsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs.jsx";
import {Separator} from "../ui/separator.jsx";
import {ScrollArea, ScrollBar} from "../ui/scroll-area.jsx";

import ParentUpsertForm from "../Forms/ParentUpsertForm.jsx";
import AdminParentList from "../data-table/AdminParentList.jsx";
import ParentApi from "../../services/Api/ParentApi.js";

export default function ManageParents() {
  const {user} = useUserContext()
  return <>
    <div className="relative overflow-x-auto">
      <div className="hidden md:block">
        <div className="">
          <div className="bg-background">
            <div className="grid">
              <div className="col-span-3 lg:col-span-4">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="parents_list" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="parents_list" className="relative">
                          Parents
                        </TabsTrigger>
                        <TabsTrigger value="add_parent">Add new parent</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value="parents_list"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            All parents
                          </h2>
                          <AdminParentList/>
                        </div>
                      </div>
                      <Separator className="my-4"/>
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                          </div>
                          <ScrollBar orientation="horizontal"/>
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="add_parent">
                      <div className="space-y-1">
                        <ParentUpsertForm handleSubmit={(values) => ParentApi.create(values)}/>
                      </div>
                      <Separator className="my-4"/>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
