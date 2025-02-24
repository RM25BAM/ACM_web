export interface NavItems {
    label: string;
    navigate: string;
}
export const navItems: NavItems[] = [
    {
        label: "About",
        navigate: 'about'
    },
    {
        label: "Events",
        navigate: 'event'
    },
    {
        label: "Join Us",
        navigate: 'join'
    },
    {
        label: "Open Source",
        navigate: 'OS'
    },
];