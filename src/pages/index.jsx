import React from 'react';
import styled from 'styled-components';
import { createTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout, {
    useScreen,
    Root,
    getHeader,
    getDrawerSidebar,
    getSidebarTrigger,
    getSidebarContent,
    getCollapseBtn,
    getContent,
    getInsetContainer,
    getInsetFooter,
} from '@mui-treasury/layout';
import HeaderContent from '../components/HeaderContent'
import NavHeader from '../components/NavHeader'
import NavContent from '../components/NavContent'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import {Icon} from "@material-ui/core";
import NightsStay from "@material-ui/icons/NightsStay";
import IconButton from "@material-ui/core/IconButton";

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const InsetContainer = getInsetContainer(styled)
const InsetFooter = getInsetFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
    builder
        .create('appHeader')
        .registerConfig('xs', {
            position: 'sticky',
            initialHeight: 56
        })
        .registerConfig('md', {
            position: 'relative', // won't stick to top when scroll down
            initialHeight: 64
        });
});

scheme.configureEdgeSidebar((builder) => {
    builder
        .create('primarySidebar', { anchor: 'left' })
        .registerTemporaryConfig('xs', {
            width: 'auto', // 'auto' is only valid for temporary variant
        });
});

const IndexPage = () => {
    const [dark, setDark] = React.useState(false);
    const screen = useScreen();

    return (
        <Root
          scheme={scheme}
          theme={createTheme({ palette: { type: dark ? 'dark' : 'light' } })}
        >
            {({ state: { sidebar } }) => (
                <>
                    <CssBaseline />
                    <Header>
                        <Toolbar>
                            <SidebarTrigger sidebarId='primarySidebar' />
                            <HeaderContent screen={screen} applyDark={setDark} />
                        </Toolbar>
                    </Header>
                    <DrawerSidebar sidebarId='primarySidebar'>
                        <SidebarContent>
                            <NavHeader collapsed={sidebar.primarySidebar.collapsed} />
                            <NavContent />
                        </SidebarContent>
                        <CollapseBtn />
                    </DrawerSidebar>
                    <Content>
                        <InsetContainer>
                            <MainContent />
                        </InsetContainer>
                    </Content>
                    <InsetFooter>
                        <Footer />
                    </InsetFooter>
                </>
            )}
        </Root>
    );
};

export default IndexPage;
