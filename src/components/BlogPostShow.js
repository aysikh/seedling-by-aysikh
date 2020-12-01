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
                      <EditOutlinedIcon onClick={(event) => handleEdit(event, post)} />
                  </Button> 
                  <Button style={{marginRight: '0px'}}> 
                      <DeleteOutlinedIcon onClick={(event) => handleDelete(post)} />
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


{/* <Accordion square expanded={expanded === 'panel0'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Daily Stoic Day 6 Challenge: 10 Commandments</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                  <div>
                      The author Ryan Holiday created a program (for about 30 days) where you do one challenge each day built around Stoic philosophy that helps towards your self-development. He does these challenges often and participating in the challenge a few months ago, I wanted to share my Day 6 of that challenge.
                  </div><br/>
                  <div>
                      Today, your job is to create your own personal Ten Commandments. What principles do you live by? What principles do you want to live by? This is the day you muster the courage to define your rules, to articulate them, and to hold yourself to them. Write down your personal Ten Commandments that describe the person you wish to be.
                  </div><br/>
                  <div>
                      1. Everyone is fluid, it is unfair to box people in based on fixed opinions including my own self. 
                      <br/>
                      2. Defining my own self or others is a cop-out mentality. 
                      <br/>
                      3. Always come from a place of love through my thoughts, words, and actions. Detach from anything that feeds the ego and creates space between others
                      <br/>
                      4. Nobody owes you anything, it’s better to give and do things without the expectation of something in return. 
                      <br/>
                      5. The only control I have in this world is of myself, the way I choose to talk to myself, feed my thoughts and body as well as how I choose to respond or react to the external events.
                      <br/> 
                      6. The outer world we experience is a reflection of our own inner world. When we treat ourselves nicely, the world seems kinder. 
                      <br/>
                      7. How you do anything is how you do everything. Each decision contributes towards the life I choose to live.
                      Be honest with yourself and others and act in accordance with my own personal moral values. 
                      <br/>
                      8. As Socrates once said “I know I know nothing.” I believe that we should never lose our inner child. We should always be exploring and asking questions. We are all students of life.
                      <br/>
                      9. Where your attention goes, energy flows. The power of attention grows where ever you put it, so it’s important to put it on the things that matter. 
                      <br/>
                      10. The only thing that is certain in life is that life is uncertain. I choose to detach myself from expectations and to enjoy each moment of the process/ journey.
                      <br/>
                  </div>
              </Typography>
          </AccordionDetails>
        </Accordion> */}