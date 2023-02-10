import React, { Component } from 'react';

class Review extends Component {
    isAnswered = (q) => {
        return q.options.some(x => x.selected) ? 'Javob berdi' : 'Javob berilmagan';
    }

    render() {
        return <div>
            <h2 className="text-center text-success font-success-normal m-3"> Ko'rib chiqish testi: {this.props.quiz.name}</h2>
            <hr />
            <div className="row text-center">
                {this.props.quiz.questions.map((q, index) =>
                    <div key={q.id} className="col-4 cursor-pointer">
                        <div id={index} onClick={this.props.move} className={`p-2 mb-2 ${this.isAnswered(q) === 'Javob berdi' ? 'bg-success text-black fw-bold' : 'bg-warning text-wrap fw-bold'}`}>{index + 1}. {this.isAnswered(q)}</div>
                    </div>
                )}
            </div>
        </div >
    }
}

export default Review;