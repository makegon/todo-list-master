import React, {Component, Fragment} from 'react'
import Article from './Article'
import articles from "./fixtures";
import {inject, observer} from 'mobx-react';
@inject('store')
@observer
export default class LangArticle extends Component{
    render(){
        return(
            <Fragment>
            <ul>
            {articles.map((article, index) =>
                <li key = {index}><Article article ={article} /></li>)}
            </ul>
                <div>
                    {this.props.store.test1}
                </div>
                <button onClick={this.props.store.actTest}>
                    Drop
                </button>
            </Fragment>
    )}

}