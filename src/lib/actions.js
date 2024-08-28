"use server"
import { connectToDb } from './utils';
import { Post, User } from './models'
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs'

export const addPost = async(prevState,formData) => {
    const {title, desc, slug, userId} = Object.fromEntries(formData);
    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save()
        revalidatePath('/blog')
        return {success: 'post added'}
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}

export const deletePost = async(formData) => {
    const { id } = formData.get('id')

    try {
        connectToDb
        await Post.findByIdAndDelete(id)
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}

export const addUser = async(prevState,formData) => {
    const {username, email, password, img} = Object.fromEntries(formData);
    try {
        connectToDb()
        const newUser = new User({
            username,
            email,
            password,
            img
        })
        await newUser.save()
        revalidatePath('/admin')
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}

export const deleteUser = async(formData) => {
    const { id } = formData.get('id')

    try {
        connectToDb
        await User.findByIdAndDelete(id)
        revalidatePath('/admin')
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}

export const handleLogin = async() => {
    await signIn('github')
}
export const handleLogout = async() => {
    await signOut()
}

export const registerUser = async(prevState,formData) => {
    const {username, email, password, passwordRepeat} = Object.fromEntries(formData);
    if(password !== passwordRepeat) return {error:'Password do not match'}

    try {
        connectToDb()
        const user = await User.findOne({username});
        if(user) return {error:"Username already exist"};
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        })
        await newUser.save()
        return {success:true}
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong!"}
    }
}


export const loginUser = async(prevState,formData) => {
    const {username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials",{username,password})
        return {success:true}
    } catch (error) {
        console.log(error)
        if(error.message.includes('CredentialsSignin')){
            return {error:"Invalid username or password"}
        }
        throw error;
    }
}