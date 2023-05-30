import React, { FC, useRef, useEffect, useState, forwardRef, ForwardedRef } from 'react';
import {
	Typography,
	Grid,
	Box,
	TextField,
	Button,
	FormGroup,
	FormControlLabel,
	Checkbox,
	useTheme,
	Container,
	Alert,
	Divider
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';

const initialFormData = {
	name: '',
	email: '',
	message: '',
	budget: '',
};

const initialFormErrors = {
	name: false,
	email: false,
	message: false,
}

const emailRegex = /\S+@\S+\.\S+/;

const Apply = () => {
	const theme = useTheme()
	const [formData, updateFormData] = useState(initialFormData);
	// form error object, all booleans
	const [formErrors, setFormErrors] = useState(initialFormErrors)
	// loading spinner for submit button
	const [isLoading, setLoading] = useState(false);
	// set true to disable submit button
	const [buttonDisabled, setbuttonDisabled] = useState(false)
	// open error snackbar 
	const [openError, setOpenError] = useState(false);
	// open success modal
	const [openSuccess, setOpenSuccess] = useState(false);
	// change error message for error snackbar
	const [errorMessage, setErrorMessage] = useState('Please eliminate form errors and try again')

	useEffect(() => {
		if (isLoading) {
			setbuttonDisabled(true)
		}
		else {
			setbuttonDisabled(false)
		}
	}, [isLoading])

	const handleChange = (e: any) => {
		if (e.target.value == '' && Object.hasOwnProperty.call(formErrors, e.target.name)) {
			setFormErrors({
				...formErrors,
				[e.target.name]: true
			});
		}
		else if (Object.hasOwnProperty.call(formErrors, e.target.name)) {
			setFormErrors({
				...formErrors,
				[e.target.name]: false
			});
		}

		// console.log(formErrors)

		if (e.target.name == 'email') {
			if (emailRegex.test(e.target.value)) {
				setFormErrors({
					...formErrors,
					email: false
				});
			}
			else {
				setFormErrors({
					...formErrors,
					email: true
				});
			}
		}

		updateFormData({
			...formData, [e.target.name]: e.target.value
		});
	};

	// snackbar for error reporting
	const handleCloseError = (reason: any) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenError(false);
	};

	// modal for success message
	const handleCloseSuccess = (reason: any) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpenSuccess(false);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true)

		const errorCheck = Object.values(formErrors).every(v => v === false)

		// console.log(emptyCheck)

		if (errorCheck) {
			try {
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				});

				if (response.ok) {
					setOpenSuccess(true)
					console.log('Quote request sent successfully');
				} else {
					setErrorMessage('Failed to send email.')
					setOpenError(true)
					console.error('Failed to send email.');
				}
			} catch (error) {
				setErrorMessage('Error sending email: ' + error)
				setOpenError(true)
				console.error('Error sending email:', error);
			}
			setLoading(false)
		}
		else {
			let updateErrors = {}
			Object.entries(formData).forEach(entry => {
				const [key, value] = entry;
				if (value == '' && Object.hasOwnProperty.call(formErrors, key)) {
					let newEntry = { [key]: true }
					updateErrors = { ...updateErrors, ...newEntry };
				}
			})

			setFormErrors({
				...formErrors,
				...updateErrors
			})

			// snackbar for error message
			setErrorMessage('Please eliminate form errors and try again')
			setOpenError(true)

			// turn off loading spinner for submit button
			setLoading(false)
		}
	};

	return (
		<Container maxWidth="md" sx={{ py: 12 }}>
			<Typography variant="h2" component="h1" sx={{ fontWeight: '600' }}>
				Quote Request
			</Typography>
			<Typography variant="body1" sx={{ mb: 4 }}>
				Please provide some information about your project and what type of help you need. We can help with UX design, branding, and full-stack development.
			</Typography>
			<Box component="form" noValidate onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							InputProps={{ disableUnderline: true }}
							required
							fullWidth
							id="name"
							label="Your Name"
							name="name"
							type="name"
							variant="filled"
							onChange={handleChange}
							error={formErrors.name}
							helperText={formErrors.name && 'Enter your name'}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							InputProps={{ disableUnderline: true }}
							fullWidth
							required
							name="email"
							label="Your Email"
							type="email"
							id="email"
							variant="filled"
							onChange={handleChange}
							error={formErrors.email}
							helperText={formErrors.email && 'Enter a valid email address'}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							InputProps={{ disableUnderline: true }}
							required
							fullWidth
							multiline
							id="message"
							label="Project description"
							name="message"
							variant="filled"
							onChange={handleChange}
							error={formErrors.message}
							helperText={formErrors.message && 'Provide some info about your project'}
							rows={6}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							InputProps={{ disableUnderline: true }}
							fullWidth
							name="budget"
							label="Estimated budget"
							id="budget"
							variant="filled"
							onChange={handleChange}
						/>
					</Grid>
				</Grid>

				<Box sx={{ position: 'relative' }}>
					<Button
						type="submit"
						fullWidth
						disabled={buttonDisabled}
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Submit
					</Button>
					{isLoading && (
						<CircularProgress
							size={24}
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								marginTop: '-9px',
								marginLeft: '-12px',
							}}
						/>
					)}
				</Box>
			</Box>


			<Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
				<Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
					{errorMessage}
				</Alert>
			</Snackbar>
			<Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
				<Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
					Your form has been submmitted. We will get back to you shortly.
				</Alert>
			</Snackbar>

		</Container>
	);
};

export default Apply;