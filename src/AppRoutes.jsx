// src/AppRoutes.jsx
import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Users = lazy(() => import("./pages/users"));
const Account = lazy(() => import("./pages/account"));
const Starter = lazy(() => import("./pages/starter"));
const Error404 = lazy(() => import("./pages/error404"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Documentation = lazy(() => import("./pages/documentation"));


const NotFound = lazy(() => import("./pages/placeholder"));

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense
            fallback={
                <Box
                    sx={{
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--color-bg)",
                    }}
                >
                    <CircularProgress sx={{ color: "var(--color-heading)" }} />
                </Box>
            }
        >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/account" element={<Account />} />
                <Route path="/starter" element={<Starter />} />
                <Route path="/error-404" element={<Error404 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/docs" element={<Documentation />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
