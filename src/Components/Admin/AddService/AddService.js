import React, { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css';
const AddService = () => {


    const [imageURL, setImgURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const addService = {
            img: imageURL,
            title: data.title,
            amount: data.amount,
            description: data.description
        }

        console.log("add Product", addService);
        fetch('https://whispering-plains-30606.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addService)
        })
            .then(res => {
                if (res) {
                    alert("Service added successfully");
                }
            })
    };

    const handleUploadImg = e => {

        const imageData = new FormData()
        imageData.set('key', 'f2ba7412e0a54266270f7441b219296d')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const style = {
        textAlign: "center",
        color: "blue",
        backgroundColor: "blanchedalmond",
        fontFamily: "arialWebkitBody",
    }
    return (
        <section className=" row">
            <AdminSidebar />
            <div className="col-md-9 ">
                <div className="inputDetails mt-5">
                    <h3 className="text-center text-secondary mb-5">ADD SERVICE</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row  add-service">

                            <div className=" details col-md-6">
                                <p>Service Title</p>
                                <input className="form-control" name="title" ref={register({ required: true })} placeholder="Service Title*" />
                                <br /><br />
                                <p>Description</p>
                                <textarea className="form-control"  ref={register({ required: true })}  name="description" id="" cols="30" rows="5" placeholder="Description*"></textarea>
                                <br /><br />
                            </div>

                            <div className="col-md-6">
                                <p>Add Price</p>
                                <input className="form-control" name="amount" ref={register({ required: true })} placeholder="Price" />
                                <br /><br />
                                <p>Add Photo</p>
                                <input className="form-control" name="img" type="file" onChange={handleUploadImg} />
                            </div>

                        </div>
                        <input className="btn-success login-button" className="btnButton" type="submit" value="Save" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;