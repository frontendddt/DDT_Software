import Layout from "../reusable/Layout";
import Breadcrumb from "../reusable/Breadcrumb";
import WorkProgress from "../homepages/WorkProgress";
import { Outlet, useLocation } from "react-router-dom";
//import ItStaff from "../servicePages/ItStaff";
const Solutions = () =>
{

    const locations = useLocation();
    const isHrmsRouts = locations.pathname.includes("/hrms") || 
        locations.pathname.includes("/tms") || locations.pathname.includes("/dms") || locations.pathname.includes("/crm")

    return (
        <Layout>
            {!isHrmsRouts && (
                <>
                    <Breadcrumb pageHeader="Solutions" />
                    <WorkProgress />
                </>
            )}
            <Outlet />
        </Layout>
    )
}
export default Solutions;