import { AdminRoutes } from '../admin/router/AdminRoutes';
import { UserRoutes } from '../user/routes';

type JSXComponent = () => JSX.Element;

let emailAdmin = "okymcgaofuwybfyrua@tmmcv.com";
let session = JSON.parse(localStorage.getItem('session')!)

export const role = (user: any) => {
    let RoleComponent: JSXComponent;

    if (user.email == emailAdmin || session?.user?.email == emailAdmin) {
        RoleComponent = AdminRoutes;
        return RoleComponent;
        
    } else {
        RoleComponent = UserRoutes;
        return RoleComponent;
    }
}