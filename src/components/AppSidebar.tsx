import { getUserData } from "@/app/actions/login"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import AddNotes from "./AddNotes"

const AppSidebar = async () => {
    // const data = await getUserData()
    // console.log({ data })
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className=" flex flex-row justify-between items-center">
                <h2>Note Mind</h2>
                <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup >
                    <SidebarGroupLabel>
                        ACTIONS
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <AddNotes />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar