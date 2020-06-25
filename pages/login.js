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

const LoginPage = () => {
  const [value, setValue] = React.useState({ name: "a", email: "b" });
  const message =
    !value.name || !value.email ? "Mismatched first character" : undefined;
  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={({ value: nextValue }) => console.log(nextValue)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" type="name" />
            </FormField>

            <FormField label="Email" name="email" required>
              <TextInput name="email" type="email" />
            </FormField>

            {message && (
              <Box pad={{ horizontal: "small" }}>
                <Text color="status-error">{message}</Text>
              </Box>
            )}

            <Box direction="row" justify="between" margin={{ top: "medium" }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

export default LoginPage;