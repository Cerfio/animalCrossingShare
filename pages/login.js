import React from "react";
import Router from 'next/router'
import { Box, Button, Grommet, Form, FormField, TextInput } from "grommet";
import { grommet } from "grommet/themes";
import { message} from 'antd';
import { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginPage = () => {
  	const [value, setValue] = React.useState({ email: "", password: "" });
  	const resetInput = () => {
    	setValue({ email: "", password: "" });
  	};
  	const requestLogin = async () => {
    	try {
      		const responseCreationUser = await axios.post(process.env.NEXT_PUBLIC_BACK_HOST + '/user/login', value);
      		const { token, pseudo } = responseCreationUser.data;
      		message.success('Welcome ' + pseudo);
      		Cookies.set(process.env.NEXT_PUBLIC_COOKIE_NAME, token);
      		Router.push('/list');
    	} catch(e) {
      		message.error(e.response.data);
    	}
  	};
  	useEffect(() => {
    	async function fetchMyAPI() {
        	try {
            	const isAlreadyConnected = await axios.get(process.env.NEXT_PUBLIC_BACK_HOST + '/user/checktoken', {
                	headers: {
                    	Authorization: 'Bearer ' + Cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME),
                	}
            	});
            	if (isAlreadyConnected.data)
              		Router.push('/list');
            	else
              		Cookies.remove(process.env.NEXT_PUBLIC_COOKIE_NAME);
        	}catch(e) {
        	}
    	}
    	fetchMyAPI()
  	}, [])
  	return (
		<Grommet full theme={grommet}>
			<Box fill align="center" justify="center">
				<Box width="medium">
					<Form
						value={value}
						onChange={nextValue => setValue(nextValue)}>
						<FormField label="Email" name="email" required>
							<TextInput name="email" type="email" />
						</FormField>
						<FormField label="Password" name="password" required>
							<TextInput name="password" type="password" />
						</FormField>
						<Box direction="row" justify="between" margin={{ top: "medium" }}>
							<Button onClick={resetInput} type="reset" label="Reset" />
							<Button onClick={requestLogin} type="submit" label="Connection" primary />
						</Box>
						<p style={{ cursor: 'pointer' }} onClick={() => { Router.push('/register') }}>Not register click here!</p>
					</Form>
				</Box>
			</Box>
		</Grommet>
	);
};

export default LoginPage;