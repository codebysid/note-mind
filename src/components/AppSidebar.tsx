import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import AddNotes from "./AddNotes"
import LogoutBtn from "./LogoutBtn"

const AppSidebar = async () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className=" flex flex-row justify-between items-center">
                <h2>Note Mind</h2>
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
            <SidebarFooter>
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <LogoutBtn />
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar