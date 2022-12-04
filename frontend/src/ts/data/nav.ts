export type navData = {
    name: string;
    icon: string;
    rows: number;
    html?: any;
    viewable: boolean;
    isNavFooter: boolean;
};
export const navElements = Object.freeze({
    logo: {
        src: 'tailwind.png',
    },
    items: [
        {
            name: 'dashboard',
            icon: 'house',
            rows: 2,
            viewable: true,
            isNavFooter: false,
        },
        {
            name: 'analytics',
            icon: 'chart-column',
            rows: 3,
            viewable: true,
            isNavFooter: false,
        },
        {
            name: 'calendar',
            icon: 'calendar',
            rows: 4,
            viewable: true,
            isNavFooter: false,
        },
        {
            name: 'profile',
            icon: '',
            rows: 1,
            viewable: false,
            isNavFooter: true, // flip or remove all isNavFooter elements to not create any navFooter
        },
    ],
});
