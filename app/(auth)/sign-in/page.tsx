"use client"
import { Button } from '@/components/ui/button';
import FooterLink from '@/components/ui/forms/FooterLink';
import InputField from '@/components/ui/forms/InputField';
import { signInWithEmail } from '@/lib/actions/auth.actions';
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const SignIn = () => {
const router=useRouter();
const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<SignInFormData>({
  defaultValues:{
    email:"",
    password:""
  },
});
const onSubmit=async(data:SignInFormData)=>{
  try {
 const result= await signInWithEmail(data); 
 if(result.success){
   toast.success("Welcome Back!");
   router.push("/");
 } 
  } catch (error) {
   console.log(error);
  toast.error("Signin failed",{
    description:error instanceof Error ? error.message : "Failed to login!"})
}
}
  return (
   <>
    <h1 className="form-title">Welcome back</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
 <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@jsmastery.com"
                    register={register}
                    error={errors.email}
                   validation={{
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Invalid email format"
  }
}}
               />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required', minLength: 4 }}
                />
                 <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In' : 'Sign In'}
                </Button>
                 <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />
           
    </form>
   </>
  )
}

export default SignIn