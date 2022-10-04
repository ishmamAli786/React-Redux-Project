import { useEffect, useState } from "react";
import { Box, CssBaseline, Container,Typography,Grid,Card,CardContent } from "@material-ui/core";
import axios from 'axios'
import { Pagination } from "@material-ui/lab";

function App() {
  const [page,setPage] = useState(1)
  const [posts,setPosts] = useState([])
  console.log('posts is',posts)
  const loadPosts = async ()=>{
    const res = await axios.get(`http://localhost:3001/posts?_page=${page}&_limit=10`)
    setPosts(res.data)
  }



  useEffect(()=>{
    loadPosts()
  },[page])

  return (
    <div className="App">
      <CssBaseline />
      <Container component={Box} py={3}>
      <Grid container spacing={2}>
        {
          posts.length>0 ?
          posts.map((post)=>{
            return(
              <Grid item sm={3} style={{height:'250px'}} key={post.id}>
                <Card>
                  <CardContent>
                    <Typography>{post.id}. {post.title}</Typography>
                    <Typography>{post.content}</Typography>
                  </CardContent>
                </Card>
                </Grid>
            )
          }):"No Posts Found"
        }
             </Grid>
        <Pagination count={10} page={page} variant="outlined" color="secondary" size="large" showFirstButton showLastButton onChange={(e,value)=>setPage(value)}/>
      </Container>
    </div>
  );
}

export default App;
