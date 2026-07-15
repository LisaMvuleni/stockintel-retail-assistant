import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import TopNavBar from "../TopNavBar/TopNavBar";

import {
    LayoutContainer,
    MainContent,
    PageContent,
} from "./DashboardLayout.style";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <LayoutContainer>
            <Sidebar />

            <MainContent>
                <TopNavBar />

                <PageContent>
                    {children}
                </PageContent>
            </MainContent>
        </LayoutContainer>
    );
}

export default DashboardLayout;