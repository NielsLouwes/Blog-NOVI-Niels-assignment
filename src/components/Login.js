import React, {useState} from 'react';
import { useForm } from "react-hook-form";

export default function Login () {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const onError = (errors, e) => console.log(errors, e);


    console.log(watch("example"));



    return (
        <form isAuthenticated = {true} onSubmit={handleSubmit(onSubmit)}
        
        >
          <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
          <input type="text" placeholder="Password" {...register("Password", { max: 20, min: 5})} />
          <input type="submit" />
          
          
        </form>
      );
    }