import React, { useState } from "react";
import { useAddStudentMutation, useStudentDataQuery } from "../services/api";
import { Student } from "../models/student.model";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [addStudent] = useAddStudentMutation();
  const [students, setStudents] = useState<Student>(Object);
  // const { refetch } = useStudentDataQuery();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudents({ ...students, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addStudent(students);
 //await addStudent(students).unwrap();
    // refetch();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="name"
            name="studentName"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="studentEmail"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;