import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEducation } from '../../redux/actions/educationAction'
import { useNavigate } from 'react-router-dom';
export default function App() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = (education) => {
        dispatch(addEducation(education))
        navigate('/details/keySkills')
    }
    const onBack = () => {
        navigate('/details/workExperience')
    }
    const onNext = () => {
        navigate('/details/keySkills')
        // dispatch(addEducation(education))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Institution"
                        variant="outlined"
                        fullWidth
                        {...register("institution", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Degree"
                        variant="outlined"
                        fullWidth
                        {...register("degree", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        {...register("subject", { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Year"
                        variant="outlined"
                        fullWidth
                        {...register("year", { required: true })}
                    />
                </Grid>
            </Grid>

            <Grid container justifyContent="space-between" marginTop={2}>
                <Grid item>
                    <Button variant="contained" color="warning" onClick={onBack}>
                        Back
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="button" onClick={onNext} variant="contained" color="warning">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
