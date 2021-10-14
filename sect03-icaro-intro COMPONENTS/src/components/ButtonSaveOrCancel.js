import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveOrCancle() {
    return (
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancle
