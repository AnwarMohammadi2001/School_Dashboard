import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaBell,
  FaCalendarAlt,
  FaCog,
  FaPalette,
  FaCloudUploadAlt,
} from "react-icons/fa";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("userManagement");

  const renderTabContent = () => {
    switch (activeTab) {
      case "userManagement":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <p>Manage users, roles, and access levels.</p>
            {/* Add form to create/edit users */}
          </div>
        );
      case "systemPreferences":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">System Preferences</h2>
            <p>
              Manage system-wide settings such as language, timezone, and date
              formats.
            </p>
            {/* Add form to change system preferences */}
          </div>
        );
      case "notifications":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Notification Settings
            </h2>
            <p>Manage email and SMS notification preferences.</p>
            {/* Add form to change notification settings */}
          </div>
        );
      case "security":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            <p>
              Configure password policies, two-factor authentication, and
              session timeouts.
            </p>
            {/* Add form for security settings */}
          </div>
        );
      case "academicYear":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Academic Year Setup</h2>
            <p>Manage the school calendar and important academic dates.</p>
            {/* Add form to configure academic year and term */}
          </div>
        );
      case "appearance":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Appearance & Theme</h2>
            <p>
              Customize the appearance of the dashboard, including themes and
              branding.
            </p>
            {/* Add form to change themes and logo */}
          </div>
        );
      case "backup":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Backup & Restore</h2>
            <p>Manage database backups and restore options.</p>
            {/* Add form for backup and restore settings */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* Sidebar Menu */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "userManagement"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("userManagement")}
            >
              <FaUser className="inline mr-2" /> User Management
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "systemPreferences"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("systemPreferences")}
            >
              <FaCog className="inline mr-2" /> System Preferences
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "notifications"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("notifications")}
            >
              <FaBell className="inline mr-2" /> Notification Settings
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "security"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("security")}
            >
              <FaLock className="inline mr-2" /> Security Settings
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "academicYear"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("academicYear")}
            >
              <FaCalendarAlt className="inline mr-2" /> Academic Year Setup
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "appearance"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("appearance")}
            >
              <FaPalette className="inline mr-2" /> Appearance & Theme
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                activeTab === "backup"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("backup")}
            >
              <FaCloudUploadAlt className="inline mr-2" /> Backup & Restore
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="col-span-3 bg-white p-6 shadow rounded-lg">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
