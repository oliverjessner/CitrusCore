import AppLayout from '../views/app/app';

document.addEventListener('DOMContentLoaded', function () {
    const app = document.querySelector('app-layout') as AppLayout;

    app.bootstrapActiveMenu();
    console.log('v:__buildVersion__ at: __buildDate__ ');
});
