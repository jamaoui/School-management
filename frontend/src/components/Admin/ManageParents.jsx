import {useUserContext} from "../../context/StudentContext.jsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs.jsx";
import {Separator} from "../ui/separator.jsx";
import {ScrollArea, ScrollBar} from "../ui/scroll-area.jsx";

import ParentCreateForm from "../Forms/ParentCreateForm.jsx";

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
                  <Tabs defaultValue="add_parent" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Parents
                        </TabsTrigger>
                        <TabsTrigger value="add_parent">Add new parent</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            All parents
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                            dolorum in iusto libero, molestias nihil non numquam optio
                            pariatur perferendis quae quidem saepe totam voluptas!
                          </p>
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
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                          distinctio, ea placeat quia quos voluptas? Aperiam at aut culpa
                          laudantium. Ab culpa ea facere laboriosam officiis, porro quasi
                          sequi voluptatibus.
                        </p>
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
                        <ParentCreateForm/>
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
