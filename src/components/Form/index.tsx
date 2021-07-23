import React from 'react'
import { useFormik } from 'formik'
import { Grid, TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, FormHelperText, InputLabel, MenuItem, Select, Switch } from '@material-ui/core';
import * as Yup from 'yup'
import 'yup-phone'
import { Button } from 'components/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
    // username: string;
    // email: string;
    // password: string;
    // phone: string
}

export const Form = (props: Props) => {
    const initialValues = {
        username: "danhthanh418",
        email: "danhthanh418@gmail.com",
        password: "123456",
        passwordConfirmation: "123456",
        phone: "0975922740",
        isSingle: true,
        gender: "female",
        age: ""
    }
    const validationSchema = Yup.object({
        username: Yup.string()
            .max(15, 'Tên đăng nhập không quá 15 ký tự')
            .required('Tên đăng nhập là bắt buộc'),
        email: Yup.string()
            .email('Sai định dạng email')
            .required("Email là bắt buộc"),
        password: Yup.string()
            .min(6, "Mật khẩu thối thiểu 6 ký tự")
            .required('Mật khẩu là bắt buộc'),
        passwordConfirmation: Yup.string()
            .min(6, "Xác nhận mật khẩu thối thiểu 6 ký tự")
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
            .required('Xác nhận mật khẩu là bắt buộc'),
        phone: Yup.string()
            .phone("VN", true, "Số điện thoại không hợp lệ")
            .nullable(true),
        // age: Yup.number().nullable(true).required("Vui lòng xác minh tuổi của bạn")

    })
    const { handleBlur, handleChange, handleSubmit, isSubmitting, touched, errors } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                //alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                console.log({ values });
            }, 2000);
        },
        validationSchema: validationSchema
    })
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3} justifyContent="flex-start">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField
                        size="small"
                        variant="outlined"
                        name="username"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Username"
                        placeholder="Username"
                        error={touched.username && !!errors.username}
                        helperText={touched.username && errors.username}
                        fullWidth
                        defaultValue={initialValues.username}
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField
                        size="small"
                        variant="outlined"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Email"
                        placeholder="Email"
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        fullWidth
                        defaultValue={initialValues.email}
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField
                        size="small"
                        variant="outlined"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Password"
                        placeholder="Password"
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        fullWidth
                        defaultValue={initialValues.password}
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField
                        size="small"
                        variant="outlined"
                        name="passwordConfirmation"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Password Confirmation"
                        placeholder="Password Confirmation"
                        error={touched.passwordConfirmation && !!errors.passwordConfirmation}
                        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
                        fullWidth
                        defaultValue={initialValues.passwordConfirmation}
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <TextField
                        size="small"
                        variant="outlined"
                        name="phone"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Phone"
                        placeholder="Phone"
                        error={touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                        fullWidth
                        defaultValue={initialValues.phone}
                    ></TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControlLabel
                        label="Is single"
                        control={<Checkbox
                            defaultChecked={initialValues.isSingle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            size="small"
                        />}
                        name="isSingle"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControlLabel
                        label="Is single"
                        control={<Switch
                            defaultChecked={initialValues.isSingle}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            size="small"
                        />}
                        name="isSingle2"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel variant="outlined">Age</InputLabel>
                        <Select
                            name="age"
                            defaultValue={initialValues.age}
                            onChange={handleChange}
                            label="Age"
                            variant="outlined"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText error={touched.age && !!errors.age}>{errors.age}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" defaultValue={initialValues.gender} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item>
                    <Button color="info" variant="contained" type="submit" startIcon={isSubmitting && <CircularProgress size={24} color="secondary" />}>{isSubmitting ? "Submitting" : "Submit"}</Button>
                </Grid>
            </Grid>
        </form>
    )
}

