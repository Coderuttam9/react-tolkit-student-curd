import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStudent, getStudent } from "../../features/studentApiSlice";
import { selectStudent } from "../../features/student/studentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const { students, isLoding, isError, messAge } = useSelector(selectStudent);

  const [input, setInput] = useState({
    name: "",
    roll: "",
    email: "",
    photo: "",
  });

  //   handle input data
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //   handle from  submit

  const handleFormSubmit = () => {
    if (!input.value) {
      console.log("fill input value");
    } else {
      console.log("  required");
    }
    dispatch(createStudent(input));

    setInput({
      name: "",
      roll: "",
      email: "",
      photo: "",
    });
  };

  useEffect(() => {
    dispatch(getStudent());
  }, [dispatch]);
  return (
    <div>
      {isLoding && <h1>Loding...</h1>}
      <input
        required
        type="text"
        placeholder="name"
        name="name"
        value={input.name}
        onChange={handleInputChange}
      />
      <input
        required
        type="text"
        placeholder="Roll"
        name="roll"
        value={input.roll}
        onChange={handleInputChange}
      />
      <input
        required
        type="text"
        placeholder="Email"
        name="email"
        value={input.email}
        onChange={handleInputChange}
      />
      <input
        required
        type="text"
        placeholder="photo"
        name="photo"
        value={input.photo}
        onChange={handleInputChange}
      />

      <button onClick={handleFormSubmit}>add</button>
    </div>
  );
};

export default Student;
