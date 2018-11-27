import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Article extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen:false
        };
        this.handleClick =  handleClick.bind(this);
        }


    render(){
        const {article} = this.props;

        const body = this.state.isOpen && <section className="card-text" style={{padding:'5%'}}>{article.body}</section>
        return (
            <div className='card mx-auto' style={{width:'95%'}}>
                <div className="card-header">
                <h3>

                  <Link to={`/meetups/${article.id}`}> {article.title} </Link>
                  {article.done ? 'выполнено':'не выполнено'}
                  <button onClick={this.handleClick} className="btn btn-secondary btn-dark float-right">
                        {this.state.isOpen ? 'закрыть':'открыть'}
                    </button>

                </h3>
                </div>
                <div className="cart-body">

                    {body}
                    <h6 className="card-subtitle text-muted" style={{padding:'2%'}}>
                        Дата создания: 14 ноября 2018 , 12:31
                    </h6>
                  <Link to={`/EditMeetup/${article.id}`}><button className="btn btn-sm float-right" style={{margin:'0 4% 2% 0'}}>Редактировать</button></Link>
                </div>
            </div>

        )
    }
}

function handleClick(){
  console.log('---','clicked')
  this.setState({
    isOpen: !this.state.isOpen
  })
}
export default Article
