import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material'; // Import the delete icon
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addWorkExperience, deleteWorkExperience } from '../../redux/actions/workDetailsAction';

export default function WorkDetails() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const workList = useSelector((state) => state.workDetails.workList);
  const [workExperiences, setWorkExperiences] = useState([]);

  const onSubmit = (data) => {
    const newWorkExperience = {
      company: data.company,
      position: data.position,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    setWorkExperiences([...workExperiences, newWorkExperience]);
    dispatch(addWorkExperience(newWorkExperience));
    reset();
  };

  const onDelete = (index) => {
    // setWorkExperiences((prevExperiences) => {
    //   const updatedExperiences = [...prevExperiences];
    //   updatedExperiences.splice(index, 1);
    //   return updatedExperiences;
    // });
    dispatch(deleteWorkExperience(index));

    // If you have a corresponding action for deleting from the Redux store, dispatch it here
    // dispatch(deleteWorkExperience(index));
  };

  const onNext = () => {
    navigate('/details/education');
  };

  const onBack = () => {
    navigate('/details/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            {...register("company", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Position"
            variant="outlined"
            fullWidth
            {...register("position", { required: true })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Date"
            type="date"
            variant="outlined"
            fullWidth
            {...register("startDate", { required: true })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="End Date"
            type="date"
            variant="outlined"
            fullWidth
            {...register("endDate", { required: true })}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>

      {workList.length > 0 && (
        <div>
          <h3>Added Work Experiences:</h3>
          <ul>
            {workList.map((experience, index) => (
              <li key={index}>
                {experience.company}, {experience.position}, Time: {experience.startDate} To {experience.endDate}
                <IconButton color='danger' onClick={() => onDelete(index)}>
                  <DeleteIcon color='danger' />
                </IconButton>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Grid container justifyContent="space-between" marginTop={2}>
        <Grid item>
          <Button type="button" variant="contained" color="warning" onClick={onBack}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button type="button" variant="contained" color="warning" onClick={onNext}>
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
