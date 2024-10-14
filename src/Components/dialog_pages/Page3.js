import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Typography,
} from '@mui/joy';

const Page3 = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    medicalConditions: '',
    allergicHistory: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        padding: 2,
      }}
    >
      <Typography level="h4" sx={{ mb: 2 }}>
        Health Profile:
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            variant="soft"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Age</FormLabel>
          <Input
            name="age"
            variant="soft"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            name="phone"
            variant="soft"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            variant="soft"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Medical Conditions</FormLabel>
          <Input
            name="medicalConditions"
            variant="soft"
            value={formData.medicalConditions}
            onChange={handleChange}
            multiline
            minRows={2}
          />
        </FormControl>
        <FormControl sx={{ mb: 2 }}>
          <FormLabel>Allergic History</FormLabel>
          <Input
            name="allergicHistory"
            variant="soft"
            value={formData.allergicHistory}
            onChange={handleChange}
            multiline
            minRows={2}
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default Page3;
