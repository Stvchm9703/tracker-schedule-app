import {
  Header,
  HeaderName,
  HeaderPanel,
  HeaderGlobalBar,
  HeaderGlobalAction, 
  Switcher,
  SwitcherDivider,
  SwitcherItem
} from "carbon-components-react";
// import {  , } from "carbon-components-react";

import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
export default function Layout({ children }) {
  return (
    <main className="container">
      <Header aria-label="IBM Platform Name">
        {/* <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName> */}
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" >
            <Search20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="Notifications"
          >
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            isActive
            tooltipAlignment="end">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" >
          <Switcher aria-label="Switcher Container">
            <SwitcherItem isSelected aria-label="Link 1" href="#">
              Link 1
            </SwitcherItem>
            <SwitcherDivider />
            <SwitcherItem href="#" aria-label="Link 2">
              Link 2
            </SwitcherItem>
            <SwitcherItem href="#" aria-label="Link 3">
              Link 3
            </SwitcherItem>
            <SwitcherItem href="#" aria-label="Link 4">
              Link 4
            </SwitcherItem>
            <SwitcherItem href="#" aria-label="Link 5">
              Link 5
            </SwitcherItem>
            <SwitcherDivider />
            <SwitcherItem href="#" aria-label="Link 6">
              Link 6
            </SwitcherItem>
          </Switcher>
        </HeaderPanel>
      </Header>
      <section className="bx--content">{children}</section>
    </main>
  )
}