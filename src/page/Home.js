import React from 'react';
import {GetItemsList} from '../service/api'
import Grid from '@material-ui/core/Grid'
import Item from './Item'
//import { Categories } from './Categories'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: [],
      contentSelectCount: 10,
      isLoading: true
    }
  }
  async componentDidMount(){
    try{
      const val = await GetItemsList('Items/GetAllItems')
      console.log(val);
      this.setState({posts: val,isLoading: false})
    }
    catch (e) {
      console.log('error'+JSON.stringify(e))
      this.setState({posts: null})
    }
}

// async LoadMore() {
//   try{
//     const posts = this.state.posts;
//     console.log(posts)
//     const val = await GetContentList('Content/GetContentGroup?contentSelectCount=' + this.state.contentSelectCount +'&contentDim=280&pullContentCount=10&wap_id=22&wap_category=123&msisdn=8801626657509&sub_page_name=Subscription&stream_page_name=Player&is_category=1')
//     posts.push(...val);
//     console.log(posts)
//     this.setState({posts,contentSelectCount: this.state.contentSelectCount + 10})
//   }
//   catch (e) {
//     console.log('error'+JSON.stringify(e))
//     this.setState({posts: null})
//   }
// }
  render() {
    if(this.state.isLoading){
      return (
        <div>
            <CircularProgress className="progress" color="secondary" />
        </div>
      )
    }
    return (
      <div>
          {this.state.posts ? (
            
              <div>
                <Link to="/login"><button>Hello</button></Link>
                  <Grid container spacing={24} style={{padding: 24}}>
                      { this.state.posts.map(currentContent => (
                          <Grid item xs={12} sm={6} lg={4} xl={3} key={currentContent.ItemId}>
                              <Item Content={currentContent} />
                          </Grid>
                      ))}
                  </Grid>
                         {/* <div>
                          <Button onClick={() => this.LoadMore()}  variant="contained" color="secondary" className="button">
                           Load More
                         </Button>
                        </div> */}
              </div>
          ) : "No Movies found" }
      </div>
)
  }
}

export default Home;
