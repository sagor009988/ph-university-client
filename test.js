const adminPaths2=[
    {
        name:'Dashboard',
        path:'/admin/dashboard',
        element:"ADMIN DASHBOARD"
    },
    {
        name:"User Management",
        children:[
            {
                name:'Create Admin',
                path:'/admin/create-admin',
                element:"CREATE ADMIN"
            },
            {
                name:'Create Faculty',
                path:'/admin/create-faculty',
                element:"CREATE FACULTY"
            },
            {
                name:'Create Student',
                path:'/admin/create-student',
                element:"CREATE STUDENT"
            },
        ]
    }
];

 const result=adminPaths2.reduce((acc,item)=>{
 acc.push(acc+item)
 return acc
 },[]);

 console.log(result);