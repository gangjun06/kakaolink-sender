import React, { FC, FormEvent, useEffect, useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  FormControlLabel,
  Switch
} from '@material-ui/core'
import { Link, LinkContent } from '../types'
import { Send } from '../utils/Message'

const errReq = '이 필드는 필수입니다'

const Home: FC = () => {
  const defaultInputProp = {
    validators: ['required'],
    errorMessages: [errReq],
    fullWidth: true
  }

  const [content, setContent] = useState<LinkContent>({
    title: '',
    description: '',
    imageUrl: '',
    link: {
      mobileWebUrl: '',
      webUrl: ''
    }
  })
  const [useImage, setUseImage] = useState<boolean>(false)

  const getValue = (target: EventTarget) =>
    (target as HTMLTextAreaElement).value

  useEffect(() => {}, [])

  const handleSubmit = () => {
    const data: Link = {
      objectType: 'feed',
      content
    }
    Send(data)
  }

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Typography variant='h6' component='h2'>
            카카오 링크 보내기
          </Typography>
          <Box mt={2}>
            <TextValidator
              label='제목'
              name='title'
              onChange={({ target }) =>
                setContent({
                  ...content,
                  title: getValue(target)
                })
              }
              value={content.title}
              {...defaultInputProp}
            />
            <br />
            <TextValidator
              label='설명'
              name='description'
              onChange={({ target }) =>
                setContent({
                  ...content,
                  description: getValue(target)
                })
              }
              value={content.description}
              {...defaultInputProp}
            />
            <br />
            <Box flex='row'>
              <FormControlLabel
                control={
                  <Switch
                    checked={useImage}
                    onChange={(_, checked) => setUseImage(checked)}
                    name='useImage'
                    color='primary'
                  />
                }
                label='이미지 사용'
              />
              {useImage && (
                <TextValidator
                  label='이미지 URL'
                  name='imageURL'
                  onChange={({ target }) =>
                    setContent({
                      ...content,
                      imageUrl: getValue(target)
                    })
                  }
                  value={content.imageUrl}
                  {...defaultInputProp}
                />
              )}
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant='contained' color='primary' type='submit'>
            Send
          </Button>
          <Button variant='outlined' color='secondary'>
            Reset
          </Button>
        </CardActions>
      </Card>
    </ValidatorForm>
  )
}

export default Home
