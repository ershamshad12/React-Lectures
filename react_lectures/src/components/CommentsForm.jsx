import { useState } from "react";

export default function CommentsForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    let fieldname = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldname]: newValue };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    addNewComment(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
    console.log(formData);
  };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={formSubmit}>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks </label>
        <textarea
          placeholder="Add few remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating </label>
        <input
          type="number"
          id="rating"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
