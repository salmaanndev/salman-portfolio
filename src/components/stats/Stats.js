import './Stats.css'

const Stats = ({rating, title}) => {

    return (
        <>
            
                <div className='statsContainer'>
                        <h1>{rating}</h1>
                        <h2>{title}</h2>
                </div>

        </>
    )
}

export default Stats
