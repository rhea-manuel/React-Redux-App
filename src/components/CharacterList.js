import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'

function CharacterList(props) {

    const fetch = () => {
        props.getData()
    }

    useEffect(() => {
        fetch()
    }, [])


    return (
        <div>
            {props.people.map((item) => {
                return (
                    <div className="Chara">
                        <h3>{item.name}</h3>
                        <div className="Trait">
                            <ul>
                                <li>Mass: {item.mass}</li>
                                <li>Hair Color: {item.hair_color}</li>
                                <li>Eye Color: {item.eye_color}</li>
                                <li>Birth Year: {item.birth_year}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        people: state.people,
        error: state.error
    }
}

export default connect(mapStateToProps, { getData })(CharacterList)