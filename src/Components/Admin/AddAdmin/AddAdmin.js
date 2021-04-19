import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";
import "./AddAdmin.css";
const AddAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        fetch('https://whispering-plains-30606.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.reset()
                    alert("Admin Added Successfully...")
                }
            })

    };

    return (
        <section className="container-fluid row">
            <AdminSidebar />
            <div className="col-md-10">
                <form style={{ maxWidth: '450px', margin: 'auto' }} className="mt-5 admin mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" name="email" ref={register({ required: true })} placeholder="Email" /><br />
                    {errors.email && <span style={{ color: 'red' }} >Email is required</span>}

                    <br />
                    <input className="btn-primary login-button" value="Make Admin" type="submit" />
                </form>
            </div>

        </section>
    );
};

export default AddAdmin;