import cokie from '@hapi/cookie';
import { validate, login, logout, checkPassword, changePassword } from '../controller/auth';
export default async function auth(server) {
    await server.register(cokie);
    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'log-cookie',
            password: process.env.COOKIE_PASSWORD,
            isSecure: true,
        },
        redirectTo: '/login/',
        validate,
    });
    server.auth.default('session');
    server.route([
        {
            method: 'POST',
            path: '/login',
            handler: login,
            options: {
                auth: {
                    mode: 'try',
                    strategy: 'session',
                },
            },
        },
        {
            method: 'POST',
            path: '/changePassword',
            handler: changePassword,
            options: {
                auth: {
                    mode: 'required',
                    strategy: 'session',
                },
            },
        },
        {
            method: 'POST',
            path: '/checkPassword',
            handler: checkPassword,
            options: {
                auth: {
                    mode: 'required',
                    strategy: 'session',
                },
            },
        },
        {
            method: 'GET',
            path: '/logout',
            handler: logout,
            options: {
                auth: {
                    mode: 'required',
                    strategy: 'session',
                },
            },
        },
    ]);
}
