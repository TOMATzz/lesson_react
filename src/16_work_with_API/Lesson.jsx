import React, { Component } from "react"
import Title from '../../components/title/title'
import NewsPosrt from '../../components/news/news'
// import Title from '../../components/title/title'
// import NewsPosrt from '../../components/news/news'
const BASE_PATH = 'https://hn.algola.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';

class News extends Component {
   state = {
      searchQuery: '',
      result: {},

   }
   componentDidMount() {
      const { searchQuery } = this.state;
      fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
         .then(res => res.json())
         .then(result => this.setNews(result))
         .catch(error => error);
   }
   setNews = result => {
      this.setState({ result })
   }
   render() {
      return (
         <div className="wrapper">
            <Title title="Hacker News" />
         </div>
      )
   }
}
export default News;