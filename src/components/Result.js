import React from 'react';

function Result(props) {
    let questions = props.questions;
    questions.forEach(q => { q.isCorrect = q.options.every(x => x.selected === x.isAnswer); })

    return (
        <div className="result m-2">
            <h2 className="text-center fw-bold m-2 font-weight-normal">Viktorina natijasi</h2>
            {questions.map((q, index) =>
                <div key={q.id} className={`mb-1 ${q.isCorrect ? 'bg-primary' : 'bg-danger'}`}>
                    <div className="result-question">
                        <h5>{index + 1}. {q.name}</h5>
                        <div className="row m-3">
                            {
                                q.options.map(option =>
                                    <div key={option.id} className="col-6">
                                        <input id={option.id} type="checkbox" disabled="disabled" checked={option.selected} /> {option.name}
                                    </div>
                                )
                            }
                        </div>
                        <div className={`m-1 p-1 text-bold ${q.isCorrect ? 'text-primary' : 'text-danger'}`}>Sizning javobingiz {q.isCorrect ? "To'g'ri" : "Noto'g'ri"}.</div>
                    </div>
                </div>
            )}
            <h4 className="alert alert-info text-center">Siz hozir bu oynani yopishingiz mumkin.</h4>
        </div>
    )
}

export default Result;