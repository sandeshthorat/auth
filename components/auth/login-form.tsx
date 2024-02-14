"use client";

import * as z from "zod";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas";

import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";

export const LoginForm = () => {
    // The line const [error, setError] = useState<string |undefined>(""); is a React hook that declares a state variable called error. The state variable is of type string |undefined, which means that it can be either a string or undefined. The default value of the state variable is an empty string.
    // The useState hook is used to manage state in functional components in   React. It takes an initial value as an argument and returns an array with     two elements: the current state value and a function that can be used to    update the state value.
    // In this case, the useState hook is used to declare a state variable called  error. The initial value of the state variable is an empty string. The   setError function can be used to update the state variable.
    // For example, the following code would update the error state variable to    the string "Something went wrong":
    const [error , setError] = useState<string | undefined>("");
    const [success , setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();


    // The line of code const form = useForm<z.infer<typeof LoginSchema>>({}) is a React Hook Form code that creates a new form and manages its state. It takes an optional object as an argument, which can be used to configure the form. In this case, the object is empty, so the form will be created with its default values.
    // The <z.infer<typeof LoginSchema>> part of the code is a TypeScript type     annotation. It tells TypeScript to infer the type of the form variable  based on the type of the LoginSchema variable. The LoginSchema variable is   a Zod schema, which is a way to define the structure and validation rules     for a form.
    // The resolver: zodResolver(LoginSchema) part of the code tells the form to   use the Zod resolver to validate the form data. The Zod resolver is a     function that takes a Zod schema and a form data object as input and    returns a boolean value indicating whether the form data is valid.
    // The defaultValues: { email: "", password: "" } part of the code sets the    default values for the form. The default values are the values that will be    used to populate the form when it is first created.
    // Overall, the line of code const form = useForm<z.infer<typeof LoginSchema>> ({}) creates a new form and manages its state. It uses the Zod resolver to   validate the form data and sets the default values for the form.
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })


    // This code is a React component that handles the submission of a login form.
    // The onSubmit function is called when the user clicks the "submit" button    on    the form. The function takes one argument, values, which is an   object  containing the values of all the fields in the form.
    // The first thing the onSubmit function does is clear the error and success   state variables. This ensures that any previous error or success     messages    are cleared before the new login attempt is made.
    // Next, the onSubmit function calls the startTransition function. This    function tells React to start a new transition, which means that React   will   batch up all of the state updates that occur during the transition     and then   apply them all at once. This helps to improve the performance of     the  application by preventing React from having to re-render the   component   multiple times.
    // Inside the startTransition function, the onSubmit function calls the login  function with the values object. The login function is responsible for   attempting to log the user in.
    // The login function returns a promise, which is an object that represents    the eventual completion or failure of the asynchronous operation. The    onSubmit function then uses the then method to attach a callback function      to the promise. The callback function is called when the login function    completes, either successfully or unsuccessfully.
    // If the login function is successful, the callback function sets the     success    state variable to the value of the data.success property. The    data.success property is a boolean value that indicates whether the login  attempt was    successful.
    // If the login function is unsuccessful, the callback function sets the   error    state variable to the value of the data.error property. The data.    error property is a string that contains the error message that was     returned by   the login function.
    // Finally, the onSubmit function returns.
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");

        startTransition(()=> {
            login(values)
                .then((data) => {
                    setError(data?.error);
                    // setSuccess(data.success);
                })
        });
    };
    
    return (
        <CardWrapper
            headerLabel="Sign in"
            backButtonLabel="Don't have an account?"
            backButtonHreaf="/auth/register"
            showSocial
            >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"    
                    >
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="join.now@example.com"
                                            type="email"
                                            />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"
                                            />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Submit
                    </Button>
                </form>

            </Form>
        </CardWrapper>
    )
}