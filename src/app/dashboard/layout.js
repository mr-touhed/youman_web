import SideMenu from "@/components/SideMenu";
import ValidedUser from "@/utils/validedUser";


const Dashboardlayout = ({children}) => {
    return (
        <ValidedUser>
        <div className="grid grid-cols-[320px_1fr]">
            <SideMenu/>
            <section className="min-h-[100vh] mt-16">
                    {children}
            </section>
        </div>
        </ValidedUser>
    );
};

export default Dashboardlayout;