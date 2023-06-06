import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { CSSTransition } from "react-transition-group";
import Swal from "sweetalert2";
import "./ProfilePage.css"; // Import the external CSS file

function ProfilePage() {
  const userData = useAuthUser();
  const Authorization = useAuthHeader();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    image: "",
    title: "",
    about: "",
    skill: "",
    location: "",
    hourly_rate: "",
  });
  const [emptyError, setEmptyError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_URL}/profile/user/${userData()._id}`
      );
      setFormData(res.data.message);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 404) setEmptyError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (emptyError) {
      axios
        .post("https://finalproject-app-api.onrender.com/profile", formData, { //hoooooooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnn
          headers: { Authorization: Authorization() },
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Submission Successful",
            text: "Your profile has been submitted successfully.",
          });
          console.log(res);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: "Failed to submit your profile. Please try again.",
          });
          console.log(err);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
      console.log(formData);
    } else {
      axios
        .patch(`${process.env.REACT_APP_URL}/profile/edit/${formData._id}`, formData)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Update Successful",
            text: "Your profile has been updated successfully.",
          });
          console.log(res);
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Update Failed",
            text: "Failed to update your profile. Please try again.",
          });
          console.log(err);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="profile-form-container">
      <h2 className="profile-form-title">Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-form-field">
          <label htmlFor="first_name" className="profile-form-label">
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            defaultValue={formData.first_name}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="last_name" className="profile-form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            defaultValue={formData.last_name}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="image" className="profile-form-label">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={formData.image}
            onChange={handleChange}
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="title" className="profile-form-label">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={formData.title}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="about" className="profile-form-label">
            About:
          </label>
          <textarea
            id="about"
            name="about"
            defaultValue={formData.about}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="skill" className="profile-form-label">
            Skill:
          </label>
          <input
            type="text"
            id="skill"
            name="skill"
            defaultValue={formData.skill}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="location" className="profile-form-label">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={formData.location}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <div className="profile-form-field">
          <label htmlFor="hourly_rate" className="profile-form-label">
            Hourly Rate:
          </label>
          <input
            type="number"
            id="hourly_rate"
            name="hourly_rate"
            defaultValue={formData.hourly_rate}
            onChange={handleChange}
            required
            className="profile-form-input"
          />
        </div>
        <CSSTransition
          in={!emptyError}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <button
            type="submit"
            className={`profile-form-button ${isSubmitting ? "disabled" : "edit-button"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Edit"}
          </button>
        </CSSTransition>
        <CSSTransition
          in={emptyError}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <button
            type="submit"
            className={`profile-form-button ${isSubmitting ? "disabled" : "submit-button"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </CSSTransition>
      </form>
    </div>
  );
}

export default ProfilePage;
