import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import './sass/App.scss';
import {Dispatch} from "redux";
import {AddArticle} from "./sass/components/AddArticle";
import { addArticle} from "./store/actionCreators";
import {removeArticle} from "./store/actionCreators";
import {Article} from "./sass/components/Article";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
      (state: ArticleState) => state.articles,
      shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
      (article: IArticle) => dispatch(addArticle(article)),
      [dispatch]
  )
  return (
    <main>
      <h1>My articles</h1>
      <AddArticle saveArticle={saveArticle} />
        {articles.map((article: IArticle) => (
            <Article key={article.id} article={article} removeArticle={removeArticle} />
        ))}

    </main>
  );
}

export default App;
