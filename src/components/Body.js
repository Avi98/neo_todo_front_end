import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Input, Radio } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

const Container = styled.div`
display: flex;
align-items: baseline;
flex-direction: column;
justify-content: center;
align-items: center;
width:calc(100% - 3rem);
.ui.input{
    width: 90% !important;
}
.ui.radio.checkbox{
    
    justify-content: end;
}
`

const ContainerRow = styled(Container)`
flex-direction: row;
justify-content: end;
.addButton{
    padding: 1rem 0 0 2rem;
}
`
const TextHeader = styled(ContainerRow)`
margin: 0 0 0 0;
padding: 30px 30px 6px 30px;
.sectionHeader {
    font-size: 20px;
    font-weight: normal;
}
.subHeader{
    color: #808080;
    margin-left: 6px;
    font-size: 11px;
    
    font-weight: normal;
}
`
export function Body() {
    return (
        <Container>
            <TextHeader>
                <h2 className="sectionHeader">Today</h2>
                <span className="subHeader"> {moment().format("MMM Do YY")}</span>
            </TextHeader>
            <Radio
                label='Choose this'
                name='radioGroup'
                value='this'
            // checked={this.state.value === 'this'}
            // onChange={this.handleChange}
            />
            <Input placeholder='e.g. Design meeting at 11am p1 #Meeting' />
            <ContainerRow>
                <div className="addButton">
                    <Button>Add task</Button>
                    <Button basic>Cancle</Button>
                </div>
            </ContainerRow>
        </Container>
    )
}