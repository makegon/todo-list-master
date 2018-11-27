import React from 'react'

import ArticleList from './Articlelist/'
import articles from './fixtures'

import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    return (


        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Список заметок</h1>
            </div>
            <ArticleList articles={articles} />
        </div>



    )

}

export default App
