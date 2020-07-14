import React from "react";
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  Text,
  TextInput
} from "grommet";
import { grommet } from "grommet/themes";
import { message} from 'antd';
import Router from 'next/router'
import axios from 'axios';

const RegisterPage = () => {
	const registerRequest = async (value) => {
		try {
      		const responseCreationUser = await axios.post(process.env.NEXT_PUBLIC_BACK_HOST + '/user/register', value);

			message.success(responseCreationUser.data);
      		Router.push('/login');
    	} catch(e) {
      		message.error(e.response.data);
    	}
  	}
  	const [value, setValue] = React.useState({ email: '', password: '', pseudo: '' });
  	return (
	    <Grommet full theme={grommet}>
    		<Box fill align="center" justify="center">
        		<Box width="medium">
          			<Form
            			value={value}
            			onChange={nextValue => setValue(nextValue)}
            			onSubmit={({ value: nextValue }) => registerRequest(nextValue)}>
            			<FormField label="Pseudo" name="pseudo" required>
              				<TextInput name="pseudo" type="text" />
            			</FormField>
            			<FormField label="Email" name="email" required>
              				<TextInput name="email" type="email" />
            			</FormField>
            			<FormField label="Password" name="password" required>
              				<TextInput name="password" type="password" />
            			</FormField>
            			<Box direction="row" justify="between" margin={{ top: "medium" }}>
              				<Button onClick={() => {name = '', email = '', pseudo = ''}} type="reset" label="Reset" />
              				<Button type="submit" label="Register" primary />
            			</Box>
          			</Form>
          			<p style={{ cursor: 'pointer' }} onClick={() => { Router.push('/login') }}>Already register click here!</p>
        		</Box>
      		</Box>
    	</Grommet>
  	);
};

export default RegisterPage;