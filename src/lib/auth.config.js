export const authConfig = {
    pages:{
        signIn:'/login'
    },
    providers: [],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user?.id,
                token.isAdmin = user?.isAdmin
            }
            return token
        },
        async session({session,token}){
            if(token){
                session.user.id = token.id,
                session.user.isAdmin = token.isAdmin
            }
            return session;
        },
        authorized({auth,request}){
            const user = auth?.user;
            const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
            const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
            // admin user can access admin page
            if(isOnAdminPage && !user.isAdmin) false
            // authenticated users can access blog page
            if(isOnBlogPage && !user) false
            // authenticated users can access login page
            if(isOnLoginPage && user) Response.redirect(new URL("/",request.nextUrl))
            //
            return true
        }
    }
}