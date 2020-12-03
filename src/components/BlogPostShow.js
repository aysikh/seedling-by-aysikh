import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import BlogPostEdit from './BlogPostEdit'

const BLOGPOSTS_URL = "http://localhost:3001/blog_posts"

  const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 100,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
    },
  }))(MuiAccordionDetails);

  const BlogPostShow = () => {

    const [expanded, setExpanded] = React.useState('panel1');
    const [posts, setPosts] = useState([])
    const [view, setView] = useState(false)
    const [singlePost, setSinglePost] = useState([])

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const getPosts = async () => {
      try{
        let userPosts = await
        axios.get(BLOGPOSTS_URL)
        setPosts(userPosts.data)
        // console.log(posts)
      } catch (err) {
        alert(err.message);
      }
    }

    useEffect(()=>{
      getPosts()
    }, [])

    const handleEdit = (event, post) => {
      console.log('edited')
      setSinglePost(post)
      setView(!view)
    }

    const handleDelete = (post) => {
      // console.log(post)
      fetch(`http://localhost:3001/blog_posts/${post.id}`, {
        method: 'DELETE',
      })
      .then(rsp => rsp.json())
      .then(window.location.reload())
    }


    return (
      <div>
        {view ? <BlogPostEdit setView={setView} singlePost={singlePost}/> :null}

        {posts.map(post => {
          const {id, title, content} = post 
          return(
            <Accordion square expanded={expanded === "panel" + id} onChange={handleChange("panel" + id)}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography style={{fontSize: '1.5rem', fontFamily: 'IBM Plex Sans'}}>{title}</Typography>

                <Button style={{marginLeft: 'auto'}}>
                      <EditOutlinedIcon style={{color: '#424242'}} onClick={(event) => handleEdit(event, post)} />
                  </Button> 
                  <Button style={{marginRight: '0px'}}> 
                      <DeleteOutlinedIcon style={{color: '#424242'}} onClick={(event) => handleDelete(post)} />
                  </Button>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {content}
                </Typography>
              </AccordionDetails>
          </Accordion>
          )
        })}
      </div>
    );
  }

export default BlogPostShow