import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addWorkExperience } from '../../redux/actions/workDetailsAction'

export default function WorkDetails() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(addWorkExperience(data))
    navigate('/details/education')
    console.log(data)
  };
  const onBack = (data) => {
    // dispatch(addWorkExperience(data))
    navigate('/details/')
  }
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
      </Grid>

      <Grid container justifyContent="space-between" marginTop={2}>
        <Grid item>
          <Button type='submit' variant="contained" color="warning" onClick={onBack}>
            Back
          </Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="warning">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
