import { Button, Container, Divider, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h2'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:'left'}}>
                  Income
                </Statistic.Label>
                <Statistic.Value>+1,045.30</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:'left'}}>
                  Expense
                </Statistic.Label>
                <Statistic.Value>-567.82</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider vertical></Divider>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Entry Title</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$82.76</Grid.Column>
            <Grid.Column width={3}>
              <Icon bordered name='edit'/>
              <Icon name='trash'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Entry Title</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.34</Grid.Column>
            <Grid.Column width={3}>
              <Icon bordered name='edit'/>
              <Icon name='trash'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Entry Title</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.82</Grid.Column>
            <Grid.Column width={3}>
              <Icon bordered name='edit'/>
              <Icon name='trash'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description'
            placeholder='New Shiny Thing'
          />
          <Form.Input
            icon='dollar'
            iconPosition='left'
            width={4}
            label='Value'
            placeholder='100.00'
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
