import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Popper from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const BLOGPOSTS_URL = "http://localhost:3001/blog_posts"
const USERS_URL = "http://localhost:3001/users/1"


const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: "absolute",
      // left: "20%",
      height: "80vh",
      width: "140vh"
    },
    submit: {
      // marginLeft: '20rem',
      fontSize: '1.3rem',
      float: 'right',
      margin: '3px'
    },
    cancel: {
      // marginLeft: '30rem',
      fontSize: '1.3rem',
      float: 'right',
      margin: '3px'
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      }
    },
    typography: {
      padding: theme.spacing(2)
    },
    icon: {
      fontSize: "5.5rem"
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2.5rem',
    }
  }))


export default function BlogPostForm(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [look, setLook] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setLook((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const [posts, setPosts] = useState({})
  const [title, setTitle] = useState(props.singlePost.title)
  const [content, setContent] = useState(props.singlePost.content)
  const [open, setOpen] = React.useState(true);
  const [user, setUser] = React.useState("")
  const userID = user

  const getPosts = async () => {
    try{
      let userPosts = await
      axios.get(BLOGPOSTS_URL)
      setPosts(userPosts.data)
      // setPosts(userPosts.data)
    } catch (err) {
      alert(err.message);
    }
  }

  const getUsers = async () => {
    try { 
      let user = await
      axios.get(USERS_URL)
      // console.log(user.data.user.id)
      setUser(user.data.user.id)
    } catch(err){
      alert(err.message)
    }
  }

  useEffect(() => {
    getPosts()
    getUsers()
  }, [])

  const getTitle = (event) => {
    setTitle(event.target.value)
  }

  const getContent = (event) => {
    setContent(event.target.value)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    let requestPackage = {
      headers: {'Content-Type':'application/json'},
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
        content: content,
        user_id: userID
      })
    }
    fetch(`http://localhost:3001/blog_posts/${props.singlePost.id}`, requestPackage)
    .then(rsp => rsp.json())
    .then(window.location.reload())
    // window.location.reload()
  }


  return(
    <div>
        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >

        <Fade in={open}>
          <Paper>
            <Typography className={classes.typography}>
            <div>
              <Container component="main" maxWidth="s">
                <Paper elevation={3} className={classes.paper}>
                  <form autoComplete="on" onSubmit={(event) => {handleSubmit(event)}}>
                    <TextField 
                      fullWidth
                      id="outlined-basic" 
                      label="Title" 
                      variant="outlined" 
                      onChange={getTitle}
                      defaultValue={props.singlePost.title}
                      />
                      
                      <br /> <br />
                      
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Your response"
                      multiline
                      rows={30}
                      variant="outlined"
                      onChange={getContent}
                      defaultValue={props.singlePost.content}
                    />
                      <br/> <br/> 
                      <Button 
                        className={classes.cancel}
                        variant="contained" 
                        color="secondary" 
                        onClick={handleClick('right-start')}>
                        Close
                      </Button>
                      <Button 
                        className={classes.submit}
                        type="submit" 
                        variant="contained" 
                        color="primary">
                        Submit
                      </Button> 
                    </form>
                </Paper>
              </Container>
            </div>
            </Typography>
          </Paper>
        </Fade>
      </Modal> 
    
        <div>
        <br />
        </div>
  </div>
  );
}