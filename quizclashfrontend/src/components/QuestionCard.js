import React from 'react'

export default function QuestionCard(props) {

    const level = (l) => {
        switch (l) {
            case 'Hard':
                return 'text-danger';
            case 'Medium':
                return 'text-primary';
            case 'Easy':
                return 'text-success';
            default:
                return '';
        }
    };

    return (
        <>
            <div className="card-shadow " style={{ width: '18rem', cursor: 'pointer', borderRadius: '1.5625rem' }}>
                <img src={props.img} className="card-img-top " alt="..." style={{ borderRadius: '1.5625rem' }} />
                <div className=" d-flex flex-column p-3 justify-content-center">
                    <h5 className="card-title">{props?.quiz?.name}</h5>
                    <p className="text-muted">{props?.quiz?.description}</p>
                    <div className='d-flex justify-content-between'>
                        <p className={`${level(props?.quiz?.level)} fw-bold m-0`}>{props?.quiz?.level}</p>
                        <p className='text-primary m-0'>{props?.quiz?.point}xp <i className="bi bi-star-fill text-warning"></i></p>
                    </div>
                </div>
            </div>
        </>
    )
}
