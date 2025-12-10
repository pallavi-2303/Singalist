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
   toast.success("Account created successfully!");
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
                    validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/ }}
                />
                 <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@jsmastery.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/ }}
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