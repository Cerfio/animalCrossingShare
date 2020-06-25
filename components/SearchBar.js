import { Box, TextInput } from "grommet";
import { Search } from "grommet-icons";

const suggestions = Array(10)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

export default function SearchBar() {
    const [value, setValue] = React.useState("");
    const onChange = event => setValue(event.target.value);
    const onSelect = event => setValue(event.suggestion);

  return (
    <div>        
        <Box fill align="center" justify="start" pad="large">
            <Box width="medium" gap="medium">
            <TextInput
                value={value}
                onChange={onChange}
                onSelect={onSelect}
                suggestions={suggestions}icon={<Search />} placeholder="search ..."
            />
            </Box>
        </Box>
        <style jsx>{`
        `}</style>
        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            * {
                box-sizing: border-box;
            }
      `}</style>
    </div>
  )
}