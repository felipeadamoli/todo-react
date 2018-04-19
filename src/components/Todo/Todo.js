import React from 'react';
import { Box, Checkbox, Label, Text } from 'gestalt'

export default (props) => {
    return (
        <Box
            alignItems="center"
            direction="row"
            display="flex"
            padding={2}
        >
            <Checkbox
                checked={props.tarefa.completo}
                id="usa"
                name="usa"
                onChange={() => props.handleChange(props.tarefa)}
            />
            <Label htmlFor="usa">
                <Box paddingX={2}>
                {
                    props.tarefa.completo ?
                    <Text italic><strike>{props.tarefa.tarefa}</strike></Text> :
                    <Text>{props.tarefa.tarefa}</Text>
                }
                </Box>
            </Label>
        </Box>
    )
};
