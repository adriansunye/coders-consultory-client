import ListConsults from "@components/layout/structuring/Home/ListConsults"
import Layout from "@components/layout/Layout"
import usePage from "@services/Providers/PageProvider"
import TopNavigation from "@components/layout/navigation/TopNavigation"
import MobileNavigation from "@components/layout/navigation/MobileNavigation"
import { Box, CssBaseline } from "@mui/material"

const Home = () => {
    const { setPage } = usePage();
    setPage("home")

    return (
        <Layout>
            <TopNavigation />
            <CssBaseline />
            <ListConsults />
            <MobileNavigation />
        </Layout>
    )
}

export default Home