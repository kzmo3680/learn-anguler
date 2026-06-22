import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Notfound } from './component/Utility/notfound/notfound';
import { Product } from './pages/product/product';
import { User } from './pages/user/user';

export const routes: Routes = [

    
    {
        path :"",
        redirectTo : 'home',
        pathMatch :"full"
    },
    {
        path : "home",
        component : Home,
        children : [
            {
                path :"product",
                component : Product
            },
            {
                path :""    ,
                component : Product
            },
            {
                path :"user",
                component : User
            }
        ]
    },
    {
        path : "about",
        loadComponent : ()=> import("./pages/about/about").then((c)=>c.About),
        pathMatch : "full"
    },
    {
        path : "cart",
        loadComponent : ()=> import("./pages/cart/cart").then((c)=>c.Cart),
        pathMatch : "full"
    },
    {
        path :"**",
        component : Notfound
    }
];
