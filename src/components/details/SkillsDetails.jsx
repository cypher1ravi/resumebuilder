import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, removeSkill } from '../../redux/actions/keySkillsAction';
import { useNavigate } from 'react-router-dom';
const SkillsDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const skillList = useSelector((state) => state.keySkills.skillList);
    const [newSkill, setNewSkill] = useState('');

    const handleAddSkill = () => {
        if (newSkill) {
            dispatch(addSkill(newSkill));
            setNewSkill('');
        }
    };
    const onBack = () => {
        navigate('/details/education')

    }
    const onNext = () => {
        navigate('/Preview')

    }
    const handleRemoveSkill = (index) => {
        dispatch(removeSkill(index));
    };

    return (
        <div>
            <TextField
                label="Add Skill"
                variant="outlined"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
            />
            <Button onClick={handleAddSkill} variant="contained" color="warning">
                Add
            </Button>
            <List>
                {skillList.map((skill, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={skill} />
                        <Button onClick={() => handleRemoveSkill(index)} variant="outlined" color="secondary">
                            Remove
                        </Button>
                    </ListItem>
                ))}
            </List>
            <Grid container justifyContent="space-between" marginTop={2}>
                <Grid item>
                    <Button variant="contained" color="warning" onClick={onBack}>
                        Back
                    </Button>
                </Grid>
                <Grid item>
                    <Button onClick={onNext} variant="contained" color="warning">
                        Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default SkillsDetails;
