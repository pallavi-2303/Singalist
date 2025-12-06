"use client"
import { Button } from "@/components/ui/button";
import {CountrySelectField} from "@/components/ui/forms/CountrySelectField";
import FooterLink from "@/components/ui/forms/FooterLink";
import InputField from "@/components/ui/forms/InputField";
import SelectField from "@/components/ui/forms/SelectField";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from "@/lib/constants";
import { on } from "node:stream";
import {useForm} from "react-hook-form"

const SignUp = () => {
const {register,handleSubmit,control,formState:{errors,isSubmitting}}=useForm<SignUpFormData>({
  defaultValues:{
    fullName:"",
    email:"",
    password:"",
    country:"India",
    investmentGoals:"Growth",
    riskTolerance:"Medium",
    preferredIndustry:"Technology"
  },
  mode:"onBlur",
});
const onSubmit=async(data:SignUpFormData)=>{
try {
 console.log(data) ;
} catch (error) {
  console.log(error);
}
}
  return (
    <>
    <h1 className='form-title'>Sign Up & Personalize</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField
      name="fullName"
      type="text"
      label="Full Name"
      placeholder="John Doe"
      register={register}
      error={errors.fullName}
      validation={{required:"Full name is required",minLen:2}}
      />
      <InputField
      name="email"
      type="email"
      label="emil"
      placeholder="Enter your email e.g. JohnDoe@gmail.com"
      register={register}
      error={errors.email}
      validation={{required:"email is required",pattern:/^\w+@\w+\.\w+$/,message:" Email is required"}}
      />
      <InputField
      name="password"
      type="password"
      label="Password"
      placeholder="Enter a strong password"
      register={register}
      error={errors.fullName}
      validation={{required:"Password is required",minLen:4}}
      />
      <CountrySelectField
      name={"country"}
      label="Country"
      control={control}
      error={errors.country}
      required />
      <SelectField
      name="investmentGoals"
      label="Investment Goals"
      placeholder="Select your investment goals"
      options={INVESTMENT_GOALS}
      control={control}
      error={errors.investmentGoals}
      required
      />
            <SelectField
      name="riskTolerance"
      label="Risk Tolerance"
      placeholder="Select your risk level"
      options={RISK_TOLERANCE_OPTIONS}
      control={control}
      error={errors.riskTolerance}
      required
      />
        <SelectField
      name="preferredIndustry"
      label="Preferred Industry"
      placeholder="Select your preferred industry"
      options={PREFERRED_INDUSTRIES}
      control={control}
      error={errors.preferredIndustry}
      required
      />
<Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
  {isSubmitting ? "Creating Account" :"Start Your Investing Journey"}
</Button>
<FooterLink
text="Already have an account?"
linkText="Sign in"
href="/sign-in"
/>
    </form>
    </>
  )
}

export default SignUp