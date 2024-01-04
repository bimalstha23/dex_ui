import React, { useState } from 'react';

interface CustomTabsProps {
    tabs: string[];
    defaultTab?: string;
    onTabChange?: (tab: string) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, defaultTab, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

    const handleTabClick = (tab: string) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
            if (onTabChange) {
                onTabChange(tab);
            }
        }
    };

    return (
        <div className='flex border-b bg-card border-border whitespace-nowrap'>
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`flex items-center relative cursor-pointer text-sm border-r border-border py-2 px-4 flex-grow basis-0 justify-center ${activeTab === tab
                        ? 'bg-muted text-primary font-medium'
                        : 'hover:bg-muted hover:text-primary'
                        }`}
                    onClick={() => handleTabClick(tab)}
                >
                    <span>{tab}</span>
                </div>
            ))}
        </div>
    );
};

export default CustomTabs