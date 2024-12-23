import { Box, useTheme } from "@mui/material"
import { Outlet, Route, Routes } from "react-router"
import { DashboardPage } from "./pages/DashboardPage.tsx"
import { TransactionsPage } from "./pages/TransactionsPage.tsx"
import { APIPlaygroundPage } from "./pages/APIPlayground.tsx"
import { SettingsPage } from "./pages/SettingsPage.tsx"
import { TopBar } from "./components/layout/topbar/TopBar.tsx"
import { Footer } from "./components/layout/Footer.tsx"

export function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="transactions" element={<TransactionsPage />} />
                <Route path="api" element={<APIPlaygroundPage />} />
                <Route path="settings" element={<SettingsPage />} />
            </Route>
        </Routes>
    )
}

export function RootLayout() {
    const theme = useTheme()
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                p: 0,
                m: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                alignContent: "stretch",
                gap: 0,
            }}
        >
            <TopBar
                sx={{
                    flexGrow: 0,
                    flexShrink: 0,
                }}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    flexShrink: 1,
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    alignContent: "stretch",
                }}
            >
                <Outlet />
            </Box>
            <Footer
                sx={{
                    flxGrow: 0,
                    flexShrink: 0,
                }}
            />
        </Box>
    )
}
