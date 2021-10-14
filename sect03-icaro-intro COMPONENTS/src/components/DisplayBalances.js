import React from 'react'
import { Divider, Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
    return (
        <Segment textAlign='center'>
            <Grid columns={2}>
                <Grid.Row>
                <Grid.Column>
                    <DisplayBalance title='Income' value='+100.00' color='green'/>
                </Grid.Column>
                <Grid.Column>
                    <DisplayBalance title='Expense' value='-80.00' color='red'/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    )
}

export default DisplayBalances
