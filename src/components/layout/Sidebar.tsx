import { useEffect, useState } from "react";

import {
  AlertIcon,
  CameraIcon,
  ChartIcon,
  DetectionIcon,
  GridIcon,
  ReportIcon,
  UsersIcon,
} from "../common/Icons";

type Section =
  | "dashboard"
  | "cctv"
  | "detections"
  | "alerts"
  | "statistics"
  | "reports"
  | "users";

type NavigationItem = {
  id: Section;
  label: string;
  target: string;
  icon: React.ReactNode;
};

const navigationItems: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    target: "dashboard",
    icon: <GridIcon />,
  },
  {
    id: "cctv",
    label: "Live CCTV",
    target: "live-cctv",
    icon: <CameraIcon />,
  },
  {
    id: "alerts",
    label: "Alert Center",
    target: "alerts",
    icon: <AlertIcon />,
  },
  {
    id: "detections",
    label: "Detection Results",
    target: "detection-results",
    icon: <DetectionIcon />,
  },
  {
    id: "statistics",
    label: "Statistics",
    target: "statistics",
    icon: <ChartIcon />,
  },
  {
    id: "reports",
    label: "Reports",
    target: "reports",
    icon: <ReportIcon />,
  },
  {
    id: "users",
    label: "User Management",
    target: "user-management",
    icon: <UsersIcon />,
  },
];

function getSectionFromHash(): Section {
  const hash = window.location.hash.replace("#", "");

  const matchingItem = navigationItems.find((item) => item.target === hash);

  return matchingItem?.id ?? "dashboard";
}

function Sidebar() {
  const [activeSection, setActiveSection] =
    useState<Section>(getSectionFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getSectionFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">F</div>

        <div className="sidebar-brand-copy">
          <h2>FISHER</h2>
          <span>AI INTELLIGENCE PLATFORM</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Primary navigation">
        <span className="nav-label">OPERATIONS</span>

        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.target}`}
            aria-label={item.label}
            className={
              activeSection === item.id ? "nav-item active" : "nav-item"
            }
            aria-current={activeSection === item.id ? "page" : undefined}
            onClick={() => handleNavigation(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>

            <span className="nav-text">{item.label}</span>

            {item.id === "alerts" && <span className="nav-alert-badge">2</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-status">
        <span className="status-dot"></span>

        <div>
          <strong>System Operational</strong>
          <small>All dashboard services available</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
