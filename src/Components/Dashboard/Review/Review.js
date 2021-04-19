import React, { useContext, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { UseContext } from '../../../App';

const Review = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImagUrl] = useState(null);
    const [logInUser, setLogInUser] = useContext(UseContext);

    const handleImageUpload = (e) => {

        console.log(e.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', 'f2ba7412e0a54266270f7441b219296d');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImagUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            img: imageURL,
            review: data.review,
            companyName: data.companyName
        }
        console.log(reviewData);
        fetch('https://whispering-plains-30606.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Your review was send successfully...")
                }
            })
    };

    return (
        <section className="container-fluid row bg-secondary  ">
            <SideBar />
            <div className="col-md-10 mt-5  ">
                <h3 className="text-center text-primary">Review</h3>
                <form style={{ maxWidth: '500px', margin: 'auto' }} onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" name="name" defaultValue={logInUser.name} ref={register({ required: true })} /> <br />
                    <input className="form-control" name="companyName" ref={register({ required: true })} placeholder="Company's Name*" /><br />

                    {errors.companyName && <span style={{ color: 'red' }} >Company is required</span>}
                    <h6>Upload your image </h6>

                    <input className="form-control" type="file" onChange={handleImageUpload} /><br />
                    <textarea id="review" className="form-control" name="review" id="" cols="50" rows="6" placeholder="Write review description*" ref={register({ required: true })}></textarea>

                    {errors.review && <span style={{ color: 'red' }}>Review description field is required</span>} <br />
                    <br />
                    <input style={{ width: "200px", margin: 'auto' }} className="btn-success mb-3 login-button" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default Review;