import YyDiscover from  '../pages/discover'; 
import YyMine from  '../pages/mine'; 
import YyFriend from  '../pages/friend'; 

const routes=[
    {
        path:'/',
        exact:true,
        component:YyDiscover
    },
    {
        path:'/mine',
        component:YyMine
    },
    {
        path:'/friend',
        component:YyFriend
    },
];

export default routes;
