import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article
    }

    return simulateHttpRequest(action)
}